'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var math = require('@wareset-utilites/math');

var first = (v, offset = 0) => v[math.abs(offset)];

exports.first = first;
