---
title:  nhouston Directory Traversal
author:  Riku Keski-Keturi
module_name: nhouston
nspid: NSP-2014-18
publish_date: Fri Nov 14 2014 01:30:48 GMT-0800 (PST) 
cves: "[{\"name\":\"CVE-2014-8883\",\"link\":\"http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2014-8883\"}]"
vulnerable_versions: "<=99.999.99999"
patched_versions: "<0.0.0"
...

## Overview

All versions of the static file server module nhouston are vulnerable to directory traversal. An attacker can provide input such as `../` to read files outside of the served directory.

## Recommendations

It is recommended that a different module be used, as we have been unable to reacher the maintainer of this module. We will continue to reach out to them, and if an update becomes available that fixes the issue, we will update this advisory accordingly.

## References
- http://en.wikipedia.org/wiki/Directory_traversal_attack
