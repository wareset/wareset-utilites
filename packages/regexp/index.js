'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var test = require('@wareset-utilites/lang/test');

var last = require('@wareset-utilites/lang/last');

var length = require('@wareset-utilites/lang/length');

var join = require('@wareset-utilites/array/join');

var flags;

var regexp = (...a) => (flags = length.length(a) < 2 || last.last(a).source || !test.test(/^[gim]+$/, last.last(a)) ? '' : a.pop(), new RegExp(join.join(a.map(v => v.source || v)), flags));

exports.default = regexp;
exports.regexp = regexp;
