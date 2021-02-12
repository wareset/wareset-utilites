'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var test = require('@wareset-utilites/lang/test');

var isFunction = require('../is-function');

var isNativeFunction = value => isFunction.isFunction(value) && test.test(/\{\s*\[native code\]\s*\}\s*$/, value);

exports.isNativeFunction = isNativeFunction;
