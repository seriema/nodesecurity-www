---
title:  ungit command injection
author:  CodingTwinky
module_name: ungit
publish_date: Fri Jan 22 2015 09:33:48 GMT-0800 (PST)
cves: "[{\"name\":\"CVE-2015-4130\",\"link\":\"http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-4130\"}]"
vulnerable_versions: "<=0.8.4"
patched_versions: ">=0.9.0"
...

## Overview:
Due to the use of `child_process.exec` when executing git commands, ungit allows for commands to be injection from user input fields that end up in an executed git command.

## Recommendations:

Update to the version >=0.9.0

## References:
- https://github.com/FredrikNoren/ungit/issues/486
