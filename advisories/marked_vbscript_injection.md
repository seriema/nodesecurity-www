---
title:  marked VBScript Content Injection
author: Xiao Long
module_name: marked
nspid: NSP-2015-3
publish_date: Thur Jan 22 2015 09:33:48 GMT-0800 (PST) 
cves: "[{\"name\":\"CVE-2015-1370\",\"link\":\"http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-1370\"}]"
vulnerable_versions: "<=0.3.2"
patched_versions: ">=0.3.3"
...

## Overview

Marked 0.3.2 and earlier is vulnerable to content injection even when `sanitize: true` is enabled.

`[xss link](vbscript:alert(1&#41;)`

will get a link

`<a href="vbscript:alert(1)">xss link</a>`

this script does not work in IE 11 edge mode, but works in IE 10 compatibility view.

## Recommendation:

Update to version 0.3.3 or greater.

## References:
- https://github.com/chjj/marked/issues/492

