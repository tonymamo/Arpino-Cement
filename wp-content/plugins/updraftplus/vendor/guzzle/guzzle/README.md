Guzzle, PHP HTTP client and webservice framework
================================================

# This is an old version of Guzzle

This repository is for Guzzle 3.x. Guzzle 5.x, the new version of Guzzle, has
been released and is available at
[https://github.com/guzzle/guzzle](https://github.com/guzzle/guzzle). The
documentation for Guzzle version 5+ can be found at
[https://guzzlephp.org](https://guzzlephp.org).

Guzzle 3 is no longer maintained and is now end of life.

### About Guzzle 3

[![Composer Downloads](https://poser.pugx.org/guzzle/guzzle/d/total.png)](https://packagist.org/packages/guzzle/guzzle)
 [![Build Status](https://secure.travis-ci.org/guzzle/guzzle3.png?branch=master)](https://travis-ci.org/guzzle/guzzle3)

- Extremely powerful API provides all the power of cURL with a simple interface.
- Truly take advantage of HTTP/1.1 with persistent connections, connection pooling, and parallel requests.
- Service description DSL allows you build awesome web service clients faster.
- Symfony2 event-based plugin system allows you to completely modify the behavior of a request.

### Installing via Composer

The recommended way to install Guzzle is through [Composer](https://getcomposer.org).

```bash
# Install Composer
curl -sS https://getcomposer.org/installer | php

# Add Guzzle as a dependency
php composer.phar require guzzle/guzzle:~3.9
```

After installing, you need to require Composer's autoloader:

```php
require 'vendor/autoload.php';
```
## Known Issues

1. Problem following a specific redirect: https://github.com/guzzle/guzzle/issues/385.
   This has been fixed in Guzzle 4/5.
2. Root XML attributes not serialized in a service description: https://github.com/guzzle/guzzle3/issues/5.
   This has been fixed in Guzzle 4/5.
3. Accept-Encoding not preserved when following redirect: https://github.com/guzzle/guzzle3/issues/9
   Fixed in Guzzle 4/5.
4. String "Array" Transmitted w/ PostFiles and Duplicate Aggregator: https://github.com/guzzle/guzzle3/issues/10
   Fixed in Guzzle 4/5.
5. Recursive model references with array items: https://github.com/guzzle/guzzle3/issues/13
   Fixed in Guzzle 4/5
6. String "Array" Transmitted w/ PostFiles and Duplicate Aggregator: https://github.com/guzzle/guzzle3/issues/10
   Fixed in Guzzle 4/5.
