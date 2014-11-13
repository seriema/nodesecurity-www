---
title:  remarkable Content Injection
author:  Adam Baldwin
module_name: remarkable
publish_date: Thu Nov 13 2014 12:33:48 GMT-0800 (PST) 
cves: "[]"
vulnerable_versions: "<1.4.1"
patched_versions: ">=1.4.1"
...

## Overview

Certain input when passed into remarkable will bypass the bad prototcol check that disallows the javascript: scheme allowing for javascript: url's to be injected into the rendered content.

## Example

```
[link](<javascript:alert(1)>)
```
This will be turned into `<a href="javascript:alert(1)">link</a>`

where as

```
[link](javascript:alert(1))
```

Would be rendered as `[link](javascript:alert(1))` because it's an invalid scheme.

## Recommendations

Upgrade to version 1.4.1 or greater 

## References
- https://github.com/jonschlinkert/remarkable/issues/97
