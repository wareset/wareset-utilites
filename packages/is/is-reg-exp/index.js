'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var instanceOf = require('@wareset-utilites/lang/instance-of');

var isRegExp = value => instanceOf.instanceOf(value, RegExp);

exports.isRegExp = isRegExp;
