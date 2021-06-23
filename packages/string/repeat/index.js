'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var lib = require('../lib');

var repeat = (string, count) => {
  var res = lib.$EMPTY;
  count = -~count || 0;

  while (--count > 0) {
    res += string;
  }

  return res;
};

exports.default = repeat;
exports.repeat = repeat;
