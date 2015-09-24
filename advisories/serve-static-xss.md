---
title:  serve-index XSS
author:  Ivan Kozik
module_name: serve-index
publish_date: Sat Mar 14 2015 01:24:28 GMT-0400 (EDT)
cves: "[]"
vulnerable_versions: "<1.6.3"
patched_versions: ">=1.6.3"
...

## Overview:

When using serve-index middleware version < 1.6.3 file and directory names are not escaped in HTML output. If remote users can influence file or directory names, this can trigger a persistent XSS attack.

## Recommendations:

  * Update to version 1.6.3 or greater

## References:
- https://github.com/expressjs/serve-index/issues/28
- https://www.owasp.org/index.php/Cross-site_Scripting_%28XSS%29
