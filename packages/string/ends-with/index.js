'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var lastIndexOf = require('@wareset-utilites/lang/last-index-of');

var length = require('@wareset-utilites/lang/length');

var math = require('@wareset-utilites/math');
/* eslint-disable max-len */


var __searchlen__;

var __stringlen__; // prettier-ignore


var endsWith = (string, search, position = 0) => !!((__searchlen__ = length.length(search)) && (__stringlen__ = length.length(string)) >= __searchlen__ && lastIndexOf.lastIndexOf(string, search, __stringlen__ -= math.abs(position)) === __stringlen__ - __searchlen__);

exports.endsWith = endsWith;
