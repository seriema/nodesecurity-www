---
title:  ldapauth-fork LDAP Injection
author: Jerome Touffe-Blin
module_name: ldapauth-fork
publish_date: Fri Sept 18 2015 12:29:10 GMT-0700 (PDT)
cves: "[{\"name\":\"CVE-2015-7294\",\"link\":\"http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-CVE-2015-7294\"}]"
vulnerable_versions: "< 2.3.3"
patched_versions: ">= 2.3.3"
...

## Overview:
ldapauth-fork versions < 2.3.3 are vulnerable to ldap injection through the username parameter.

## Recommendations:
Updated to ldapauth-fork 2.3.3 or greater.

## References:
- https://github.com/vesse/node-ldapauth-fork/issues/21
- https://github.com/vesse/node-ldapauth-fork/commit/3feea43e243698bcaeffa904a7324f4d96df60e4


