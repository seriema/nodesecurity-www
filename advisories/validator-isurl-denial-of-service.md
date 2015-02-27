---
title:  validator isURL Regular Expression Denial of Service
author: Karl Düüna
module_name: validator
nspid: NSP-2014-16
publish_date: Wed Nov 12 2014 11:45:48 GMT-0800 (PST) 
cves: "[{\"name\":\"CVE-2014-8882\",\"link\":\"http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2014-8882\"}]"
vulnerable_versions: "<3.22.1"
patched_versions: ">=3.22.1"
...

## Overview

The validator module, versions < 3.22.1 are vulnerable to Regular Expression Denial of Service ([ReDoS](http://en.wikipedia.org/wiki/ReDoS)). 


## Recommendations

Update to version 3.22.1 or greater.

## References
- [Analysis of Node.js platform web application security (pdf)](http://lab.cs.ttu.ee/dl93)
- https://github.com/chriso/validator.js/issues/152#issuecomment-48107184
- http://en.wikipedia.org/wiki/ReDoS
