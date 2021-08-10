"use strict";
var _a;
console.log(Symbol('foo') === Symbol('foo')); // false
var sym = Symbol();
var obj = (_a = {},
    _a[sym] = 'value',
    _a);
