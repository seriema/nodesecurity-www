---
title: express No Charset in Content-Type Header
author: Paweł Hałdrzyński
module_name: express
publish_date: Fri Sep 12 2014 07:46:45 GMT-0700 (PDT)
cves: "[{\"name\":\"CVE-2014-6393\",\"link\":\"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2014-6393\"}]"
vulnerable_versions: "<3.11 || >= 4 <4.5"
patched_versions: ">=3.11 <4 || >=4.5"
---

## Overview:
Vulnerable versions of express do not specify a charset field in the content-type header while displaying 400 level response messages. The lack of enforcing user's browser to set correct charset, could be leveraged by an attacker to perform a cross-site scripting attack, using non-standard encodings, like UTF-7.

## Recommendations:
Update express to a patched version.
