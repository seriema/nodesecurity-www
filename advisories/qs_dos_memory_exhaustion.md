---
title: qs Denial-of-Service Memory Exhaustion
author: Dustin Shiver
module_name: qs
publish_date: Aug 6 2014 09:10:22 GMT-0800 (PST) 
cves: "[{\"name\":\"CVE-2014-7191\",\"link\":\"http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2014-7191\"}]"
vulnerable_versions: "<1.0.0"
patched_versions: ">= 1.x"
...

## Overview
The qs module has the ability to create sparse arrays during parsing. By specifying a high index it is possible to create a large array that will eventually take up all the allocated memory of the running process, resulting in a crash.

## Recommendations
Update qs to version 1.0.0 or greater

## References
- https://github.com/visionmedia/node-querystring/issues/104

