'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var repeat = require('../repeat');

var slice = require('@wareset-utilites/lang/slice');

var length = require('@wareset-utilites/lang/length');

var lib = require('../lib');

var padEnd = (string, len = 0, pad = lib.__pad__) => !((len -= length.length(string)) > 0) ? string : string + slice.slice(repeat.repeat(pad, len / length.length(pad)), 0, len);

exports.padEnd = padEnd;
