---
title:  marked VBScript Content Injection
author: Xiao Long
module_name: marked
publish_date: Thur Jan 22 2015 09:33:48 GMT-0800 (PST) 
cves: "[]"
vulnerable_versions: "<=0.3.2"
patched_versions: "<0.0.0"
...

## Overview

Marked 0.3.2 and earlier is vulnerable to content injection even when `sanitize: true` is enabled.

\[xss link](vbscript:alert(1&#41;)

will get a link

&lt;a href="vbscript:alert(1)">xss link</a>

this script does not work in IE 11 edge mode, but works in IE 10 compatibility view.

## Recommendation:

As there is no patch available we recommend switching to another markdown parser. 

If you have the capability to provide this project with a patch, please see the issue below and submit a pull request.

## References:
- https://github.com/chjj/marked/issues/492

