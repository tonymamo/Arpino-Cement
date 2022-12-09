<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit19642a83e130da52dbb74c814ec43dd5
{
    public static $files = array (
        'a5f882d89ab791a139cd2d37e50cdd80' => __DIR__ . '/..' . '/tgmpa/tgm-plugin-activation/class-tgm-plugin-activation.php',
    );

    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'ProteusThemes\\ThemeRegistration\\' => 32,
            'ProteusThemes\\CustomizerUtils\\' => 30,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'ProteusThemes\\ThemeRegistration\\' => 
        array (
            0 => __DIR__ . '/..' . '/proteusthemes/theme-registration-and-updates/src',
        ),
        'ProteusThemes\\CustomizerUtils\\' => 
        array (
            0 => __DIR__ . '/..' . '/proteusthemes/wp-customizer-utilities/src',
        ),
    );

    public static $classMap = array (
        'Mexitek\\PHPColors\\Color' => __DIR__ . '/..' . '/mexitek/phpcolors/src/Mexitek/PHPColors/Color.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit19642a83e130da52dbb74c814ec43dd5::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit19642a83e130da52dbb74c814ec43dd5::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit19642a83e130da52dbb74c814ec43dd5::$classMap;

        }, null, ClassLoader::class);
    }
}
