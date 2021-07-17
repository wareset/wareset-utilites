'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var isFunction = require('@wareset-utilites/is/isFunction');

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {
    'default': e
  };
}

var isFunction__default = /*#__PURE__*/_interopDefaultLegacy(isFunction);

var trycatch = (tryFn, catchFn, errorMsg) => {
  var res;

  try {
    res = tryFn();
  } catch (e) {
    if (errorMsg) console.error(e);
    res = isFunction__default['default'](catchFn) ? catchFn(e) : catchFn;
  }

  return res;
};

exports.default = trycatch;
exports.trycatch = trycatch;
