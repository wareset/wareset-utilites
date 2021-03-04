'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var length = require('../length');

var math = require('@wareset-utilites/math');

var last = (v, offset = 0) => v[length.length(v) - 1 - math.abs(offset)];

exports.last = last;
