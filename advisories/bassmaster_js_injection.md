---
title:  Arbitrary JavaScript Execution in Bassmaster
author:  Jarda Kotěšovec
module_name: bassmaster
nspid: NSP-2014-13
publish_date: Sat Sep 27 2014 08:44:48 GMT-0800 (PST) 
cves: "[{\"name\":\"CVE-2014-7205\",\"link\":\"http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2014-7205\"}]"
vulnerable_versions: "<=1.5.1"
patched_versions: ">=1.5.2"
...

## Overview
A vulnerability exists in bassmaster <= 1.5.1 that allows for an attacker to provide arbitrary JavaScript that is then executed server side via eval.

## Recommendations
Update to bassmaster version 1.5.2 or greater.

## References
- https://www.npmjs.org/package/bassmaster
- https://github.com/hapijs/bassmaster/commit/b751602d8cb7194ee62a61e085069679525138c4
