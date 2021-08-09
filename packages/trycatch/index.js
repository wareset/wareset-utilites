'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var isFunction = require('@wareset-utilites/is/isFunction');

var trycatch = (r, e, c) => {
  var o;

  try {
    o = r();
  } catch (i) {
    c && console.error(i), o = isFunction.isFunction(e) ? e(i) : e;
  }

  return o;
};

exports.default = trycatch;
exports.trycatch = trycatch;
