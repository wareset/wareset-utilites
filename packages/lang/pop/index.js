'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var splice = require('../splice');

var length = require('../length');

var pop = (list, offset) => offset ? splice.splice(list, length.length(list) - offset, 1)[0] : list.pop();

exports.pop = pop;
