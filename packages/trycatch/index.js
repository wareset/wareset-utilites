'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var isFunction = require('@wareset-utilites/is/is-function');

var trycatch = (tryFn, catchFn, errorMsg = true) => {
  var res;

  try {
    res = tryFn();
  } catch (e) {
    if (errorMsg) console.error(e);
    res = isFunction.isFunction(catchFn) ? trycatch(() => catchFn(e)) : catchFn;
  }

  return res;
};

exports.default = trycatch;
exports.trycatch = trycatch;
