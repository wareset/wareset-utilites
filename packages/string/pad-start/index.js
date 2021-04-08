'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var repeat = require('../repeat');

var slice = require('@wareset-utilites/lang/slice');

var length = require('@wareset-utilites/lang/length');

var lib = require('../lib');

var padStart = (string, len = 0, pad = lib.__space__) => !((len -= length.length(string)) > 0) ? string : slice.slice(repeat.repeat(pad, len / length.length(pad) + 1), 0, len) + string;

exports.padStart = padStart;
