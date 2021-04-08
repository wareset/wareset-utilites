'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var lib = require('../lib');

var repeat = (string, count = 1) => {
  var res = lib.__empty__;
  count = -~count || 0;

  while (--count > 0) {
    res += string;
  }

  return res;
};

exports.repeat = repeat;
