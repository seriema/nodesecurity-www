---
title: send Directory Traversal
author: Ilya Kantor
module_name: send
publish_date: Fri Sep 12 2014 08:06:33 GMT-0700 (PDT)
cves: "[{\"name\":\"CVE-2014-6394\",\"link\":\"http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2014-6394\"}]"
vulnerable_versions: "< 0.8.4"
patched_versions: ">= 0.8.4"
---

## Overview
When relying on the root option to restrict file access it may be possible for an application consumer to escape out of the restricted directory and access files in a similarly named directory. For example, `static(_dirname + '/public')` would allow access to `_dirname + '/public-restricted'`.

## Recommendation
Upgrade to a version greater than or equal to 0.8.4.

## References
- https://github.com/visionmedia/send/pull/59
- https://github.com/visionmedia/send/commit/9c6ca9b2c0b880afd3ff91ce0d211213c5fa5f9a
