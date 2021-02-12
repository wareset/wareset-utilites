'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var length = require('../length');

var last = (v, offset = 0) => v[length.length(v) - 1 - offset];

exports.last = last;
