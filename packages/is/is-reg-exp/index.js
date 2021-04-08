'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var instanceOf = require('@wareset-utilites/lang/instance-of');

var isRegExp = v => instanceOf.instanceOf(v, RegExp);

exports.isRegExp = isRegExp;
