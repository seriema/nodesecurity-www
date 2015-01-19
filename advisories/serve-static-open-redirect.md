---
title:  serve-static Open Redirect
author:  Pierre-Élie Fauché
module_name: serve-static
publish_date: Tue Jan 13 2015 14:50:48 GMT-0800 (PST) 
cves: "[{\"name\":\"CVE-2015-1164\",\"link\":\"http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-1164\"}]"
vulnerable_versions: "<1.7.2"
patched_versions: ">=1.7.2"
...

## Overview

When using serve-static middleware version < 1.7.2 and it's configured to mount at the root it creates an open redirect on the site.

For example:
If a user visits `http://example.com//www.google.com/%2e%2e` they will be redirected to `www.google.com`

## Recommendations
Update to version 1.7.2 or greater. It also appears that you can set 'redirect: false' option to disable this behavior.

## References
- https://github.com/expressjs/serve-static/issues/26
- https://www.owasp.org/index.php/Open_redirect
