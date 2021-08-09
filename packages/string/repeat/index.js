'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var lib = require('../lib');

var repeat = (r, t) => {
  var o = lib.$EMPTY;

  for (t = -~t || 0; --t > 0;) {
    o += r;
  }

  return o;
};

exports.default = repeat;
exports.repeat = repeat;
