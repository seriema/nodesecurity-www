---
title:  paypal-ipn validation bypass
author:  Martin Angelov
module_name: paypal-ipn
publish_date: Wed Dec 03 2014 05:00:00 GMT-0800 (PST)
cves: "[]"
vulnerable_versions: "<3.0.0"
patched_versions: ">=3.0.0"
...

## Overview:

paypal-ipn uses the `test_ipn` parameter (which is set by the PayPal IPN simulator) to determine if it should use the production PayPal site or the sandbox.

"With a bit of time, an attacker could craft a request using the simulator that would fool any application which does not explicitly check for test_ipn in production." [1]


## Recommendations:
- Upgrade to version 3.0.0 or greater.

## References:
- [1] https://github.com/andzdroid/paypal-ipn/issues/11
