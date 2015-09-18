---
title:  ldapauth LDAP Injection
author: David Black, Jerome Touffe-Blin
module_name: ldapauth
publish_date: Fri Sept 18 2015 12:30:10 GMT-0700 (PDT)
cves: "[]"
vulnerable_versions: "<=2.2.4"
patched_versions: ""
...

## Overview:
ldapauth versions <= 2.2.4 are vulnerable to ldap injection through the username parameter.

## Recommendations:
Consider updating to use [ldapauth-fork](https://www.npmjs.com/package/ldapauth-fork) 2.3.3 or greater as ldapauth has not yet been patched.

## Reference:
- http://www.openwall.com/lists/oss-security/2015/09/18/4


