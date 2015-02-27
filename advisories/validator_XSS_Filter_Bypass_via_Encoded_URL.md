---
title: Validator XSS Filter Bypass via Encoded URL
author:  taku0
module_name: validator
nspid: NSP-2014-14
publish_date: Mon Oct 27 2014 09:33:48 GMT-0800 (PST) 
cves: "[]"
vulnerable_versions: "<2.0.0"
patched_versions: ">=2.0.0"
...

## Overview:
The validator module for Node.js contains functionality meant to filter potential XSS attacks (a filter called xss). A method of
bypassing the filter via an encoded URL has been publicly disclosed. In general, because the function’s filtering is blacklist-based it is likely that other bypasses will be discovered in the future. Developers are encouraged not to use the xss filter function in this package.

## Details:
The xss() function removes the word "javascript" when contained inside an attribute. However, it does not properly handle cases where
characters have been hex-encoded. As a result, it is possible to build an input that bypasses the filter but which the browser will accept as valid JavaScript.

For example, browsers interpret <a href="jav&#x61;script:...">abc</a> as <a href="javascript:...">abc</a>.

## Recommendations:
Upgrade to the latest version of this library. However, it should be noted that the fix for this vulnerability was to remove the xss filter functionality. Seek another library to provide proper output encoding.

Reference:
- https://github.com/chriso/validator.js/issues/181
- Related advisory 

