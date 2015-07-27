---
title:  Geddy Directory Traversal
author:  Vikram Chaitanya
module_name: geddy
publish_date: Mon Jul 27 2015 15:33:48 GMT-0800 (PST) 
cves: "[]"
vulnerable_versions: "<13.0.8"
patched_versions: ">=13.0.8"
...

## Overview

Geddy static file serving allows directory traversal with a URI encoded path.

## Recommendations

Update to version >= 13.0.8

## References
- https://github.com/geddy/geddy/issues/697
- https://github.com/geddy/geddy/pull/699
