<?php
/**
 * Copyright 2012-2014 Rackspace US, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

namespace OpenCloud\ObjectStore\Upload;

use DirectoryIterator;
use Guzzle\Http\EntityBody;
use OpenCloud\Common\Collection\ResourceIterator;
use OpenCloud\Common\Exceptions\InvalidArgumentError;
use OpenCloud\ObjectStore\Resource\Container;

/**
 * DirectorySync upload class, in charge of creating, replacing and delete data objects on the API. The goal of
 * this execution is to sync local directories with remote CloudFiles containers so that they are consistent.
 *
 * @package OpenCloud\ObjectStore\Upload
 */
class DirectorySync
{
    /** @var string The path to the directory you're syncing. */
    private $basePath;

    /** @var ResourceIterator A collection of remote files in Swift. */
    private $remoteFiles;

    /** @var AbstractContainer The Container object you are syncing. */
    private $container;

    /** @var string */
    private $targetDir;

    /**
     * Basic factory method to instantiate a new DirectorySync object with all the appropriate properties.
     *
     * @param string    $path      The local path
     * @param Container $container The container you're syncing
     * @param string    $targetDir The path (or pseudo-directory) that the files will be nested in
     *
     * @return DirectorySync
     */
    public static function factory($path, Container $container, $targetDir = null)
    {
        $transfer = new self();
        $transfer->setBasePath($path);
        $transfer->setContainer($container);
        $transfer->setRemoteFiles($container->objectList());
        $transfer->setTargetDir($targetDir);

        return $transfer;
    }

    /**
     * @param $path
     * @throws \OpenCloud\Common\Exceptions\InvalidArgumentError
     */
    public function setBasePath($path)
    {
        if (!file_exists($path)) {
            throw new InvalidArgumentError(sprintf('%s does not exist', $path));
        }

        $this->basePath = $path;
    }

    /**
     * @param ResourceIterator $remoteFiles
     */
    public function setRemoteFiles(ResourceIterator $remoteFiles)
    {
        $this->remoteFiles = $remoteFiles;
    }

    /**
     * @param Container $container
     */
    public function setContainer(Container $container)
    {
        $this->container = $container;
    }

    /**
     * @param string $dir The target path that all files will be nested in. By default, the files will not be nested.
     */
    public function setTargetDir($dir)
    {
        $this->targetDir = rtrim($dir, '/');
    }

    /**
     * Execute the sync process. This will collect all the remote files from the API and do a comparison. There are
     * four scenarios that need to be dealt with:
     *
     * - Exists locally, exists remotely (identical checksum) = no action
     * - Exists locally, exists remotely (diff checksum) = local overwrites remote
     * - Exists locally, not exists remotely = local is written to remote
     * - Not exists locally, exists remotely = remote file is deleted
     */
    public function execute()
    {
        $localFiles = $this->traversePath($this->basePath);

        $this->remoteFiles->rewind();
        $this->remoteFiles->populateAll();

        $entities = array();
        $requests = array();
        $deletePaths = array();

        // Handle PUT requests (create/update files)
        foreach ($localFiles as $filename) {
            $remoteFilename = $this->targetDir ? $this->targetDir . '/' . $filename : $filename;

            $callback = $this->getCallback($remoteFilename);
            $filePath = rtrim($this->basePath, '/') . '/' . $filename;

            if (!is_readable($filePath)) {
                continue;
            }

            $entities[] = $entityBody = EntityBody::factory(fopen($filePath, 'r+'));

            if (false !== ($remoteFile = $this->remoteFiles->search($callback))) {
                // if different, upload updated version
                if ($remoteFile->getEtag() != $entityBody->getContentMd5()) {
                    $requests[] = $this->container->getClient()->put(
                        $remoteFile->getUrl(),
                        $remoteFile->getMetadata()->toArray(),
                        $entityBody
                    );
                }
            } else {
                // upload new file
                $url = clone $this->container->getUrl();
                $url->addPath($remoteFilename);

                $requests[] = $this->container->getClient()->put($url, array(), $entityBody);
            }
        }

        // Handle DELETE requests
        foreach ($this->remoteFiles as $remoteFile) {
            $remoteName = $remoteFile->getName();
            if (!in_array($remoteName, $localFiles)) {
                $deletePaths[] = sprintf('/%s/%s', $this->container->getName(), $remoteName);
            }
        }

        // send update/create requests
        if (count($requests)) {
            $this->container->getClient()->send($requests);
        }

        // bulk delete
        if (count($deletePaths)) {
            $this->container->getService()->bulkDelete($deletePaths);
        }

        // close all streams
        if (count($entities)) {
            foreach ($entities as $entity) {
                $entity->close();
            }
        }
    }

    /**
     * Given a path, traverse it recursively for nested files.
     *
     * @param $path
     * @return array
     */
    private function traversePath($path)
    {
        $filenames = array();

        $directory = new DirectoryIterator($path);

        foreach ($directory as $file) {
            if ($file->isDot()) {
                continue;
            }
            if ($file->isDir()) {
                $filenames = array_merge($filenames, $this->traversePath($file->getPathname()));
            } else {
                $filenames[] = $this->trimFilename($file);
            }
        }

        return $filenames;
    }

    /**
     * Given a path, trim away leading slashes and strip the base path.
     *
     * @param $file
     * @return string
     */
    private function trimFilename($file)
    {
        return ltrim(str_replace($this->basePath, '', $file->getPathname()), '/');
    }

    /**
     * Get the callback used to do a search function on the remote iterator.
     *
     * @param $name     The name of the file we're looking for.
     * @return callable
     */
    private function getCallback($name)
    {
        $name = trim($name, '/');

        return function ($remoteFile) use ($name) {
            if ($remoteFile->getName() == $name) {
                return true;
            }

            return false;
        };
    }
}
