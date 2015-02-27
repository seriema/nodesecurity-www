---
title: qs Denial-of-Service Extended Event Loop Blocking
author: Tom Steele
module_name: qs
nspid: NSP-2014-11
publish_date: Aug 6 2014 09:10:23 GMT-0800 (PST) 
cves: "[]"
vulnerable_versions: "<1.0.0"
patched_versions: ">= 1.x"
...

## Overview
The qs module does not have an option or default for specifying object depth and when parsing a string representing a deeply nested object will block the event loop for long periods of time. An attacker could leverage this to cause a temporary denial-of-service condition, for example, in a web application, other requests would not be processed while this blocking is occurring.

## Recommendations
Update qs to version 1.0.0 or greater
