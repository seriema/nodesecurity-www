---
title:  serve-static Open Redirect
author:  Pierre-Élie Fauché
module_name: serve-static
publish_date: Tue Jan 13 2015 14:50:48 GMT-0800 (PST) 
cves: "[{\"name\":\"CVE-2015-1164\",\"link\":\"http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-1164\"}]"
vulnerable_versions: "<1.6.5 || >=1.7.0 <1.7.2"
patched_versions: "~1.6.5 || >=1.7.2"
...

## Overview

When using serve-static middleware version < 1.7.2 and it's configured to mount at the root it creates an open redirect on the site.

For example:
If a user visits `http://example.com//www.google.com/%2e%2e` they will be redirected to `//www.google.com/%2e%2e`, which some browsers interpret as `http://www.google.com/%2e%2e`.

## Recommendations

  * Update to version 1.7.2 or greater (or 1.6.5 if sticking to the 1.6.x line).
  * Disable redirects if not using the feature with 'redirect: false' option and cannot upgrade.

## References
- https://github.com/expressjs/serve-static/issues/26
- https://www.owasp.org/index.php/Open_redirect
