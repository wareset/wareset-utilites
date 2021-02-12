'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var splice = require('../splice');

var shift = (list, offset) => offset ? splice.splice(list, offset, 1)[0] : list.shift();

exports.shift = shift;
