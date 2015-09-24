---
title:  fancy-server Directory Traversal
author:  Adam Baldwin
module_name: fancy-server
publish_date: Fri Nov 14 2014 20:00:48 GMT-0800 (PST)
cves: "[]"
vulnerable_versions: "<0.1.4"
patched_versions: ">=0.1.4"
...

## Overview:

Versions less than 0.1.4 of the static file server module fancy-server are vulnerable to directory traversal. An attacker can provide input such as `../` to read files outside of the served directory.

## Recommendations:

Upgrade to version 0.1.4 or greater.

## References:
- http://en.wikipedia.org/wiki/Directory_traversal_attack
