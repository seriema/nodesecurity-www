---
title:  sequelize SQL Injection in Order
author:  Levan Basharuli
module_name: sequelize
publish_date: Sun Jan 18 2015 22:00:00 GMT-0800 (PST)
cves: "[{\"name\":\"CVE-2015-1369\",\"link\":\"http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-1369\"}]"
vulnerable_versions: "<=2.0.0-rc7"
patched_versions: ">=2.0.0-rc8"
...

## Overview:

SQL Injection is possible in an application using the npm module sequelize if untrusted user input is passed into the order parameter.


Example:
```
Test.findAndCountAll({
where: { id :1 },
order : [['id', 'UNTRUSTED USER INPUT']]
})
```

## Recommendations:

Update to version 2.0.0-rc8 or greater.

## References:
- https://github.com/sequelize/sequelize/issues/2906
