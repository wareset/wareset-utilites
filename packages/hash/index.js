'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var hash = (str, salt) => {
  str = ((salt || '') + str).replace(/\r/g, '');
  var h = 0;
  var i = str.length;

  while (i--) {
    h = (256 * h + str.charCodeAt(i)) % 2147483647;
  }

  return (-h >>> 0).toString(36);
};

exports.default = hash;
exports.hash = hash;
