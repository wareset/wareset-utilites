'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var repeat = (string, count = 1) => {
  var res = '';
  count = -~count || 0;

  while (--count > 0) {
    res += string;
  }

  return res;
};

exports.repeat = repeat;
