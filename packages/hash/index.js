'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var hash = (t, e) => {
  var r = 0,
      h = (t = ((e || '') + t).replace(/\r/g, '')).length;

  for (; h--;) {
    r = (256 * r + t.charCodeAt(h)) % 2147483647;
  }

  return (-r >>> 0).toString(36);
};

exports.default = hash;
exports.hash = hash;
