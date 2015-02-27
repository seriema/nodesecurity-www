---
title:  Yar Denial-of-Service
author:  Reid Burke
module_name: yar
nspid: NSP-2014-6
publish_date: Mon Jun 16 2014 12:29:10 GMT-0700 (PDT)
cves: "[{\"name\":\"CVE-2014-4179\",\"link\":\"http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2014-4179\"}]"
vulnerable_versions: "<2.2.0"
patched_versions: ">=2.2.0"
...

## Overview
Yar uses an encrypted cookie for session support, during the hapi request/reply flow if this cookie value is invalid (changed by the end-user), a request object variable is not set. In versions prior 2.2.0, the presence of this variable was not validated prior to use, resulting in an unhandled ReferenceError, which in most cases will crash the process.

## Recommendations
Update to a version 2.2.0 or greater.

## References
- https://github.com/spumko/yar/issues/34
