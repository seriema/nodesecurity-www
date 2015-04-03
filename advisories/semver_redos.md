---
title:  semver Regular Expression Denial of Service
author:  Adam Baldwin
module_name: semver
publish_date: Fri Apr 3 2015 19:00:00 GMT-0700 (PDT)
cves: "[]"
vulnerable_versions: "<4.3.2"
patched_versions: ">=4.3.2"
...

## Overview

semver is vulnerable to regular expression denial of service ([ReDoS](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS)) when extremely long version strings are parsed. 

"The Regular expression Denial of Service (ReDoS) is a Denial of Service attack, that exploits the fact that most Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size). An attacker can then cause a program using a Regular Expression to enter these extreme situations and then hang for a very long time." [1]


## Recommendations
Update to a version 4.3.2 or greater

## References
- https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
- https://github.com/npm/npm/releases/tag/v2.7.5
