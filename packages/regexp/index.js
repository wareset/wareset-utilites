'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var test = require('@wareset-utilites/lang/test');

var last = require('@wareset-utilites/lang/last');

var length = require('@wareset-utilites/lang/length');

var flags;

var regexp = (...a) => (flags = length.length(a) < 2 || last.last(a).source || !test.test(/^[gim]+$/, last.last(a)) ? '' : a.pop(), new RegExp(a.map(v => v.source || v).join(''), flags));

exports.default = regexp;
exports.regexp = regexp;
