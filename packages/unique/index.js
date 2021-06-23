'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var indexOfLeft = require('@wareset-utilites/array/indexOfLeft');

var filterLeft = require('@wareset-utilites/array/filterLeft');

var includes = require('@wareset-utilites/array/includes');

var isBe = require('@wareset-utilites/is/isBe');

var isFunction = require('@wareset-utilites/is/isFunction');

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {
    'default': e
  };
}

var indexOfLeft__default = /*#__PURE__*/_interopDefaultLegacy(indexOfLeft);

var filterLeft__default = /*#__PURE__*/_interopDefaultLegacy(filterLeft);

var includes__default = /*#__PURE__*/_interopDefaultLegacy(includes);

var isBe__default = /*#__PURE__*/_interopDefaultLegacy(isBe);

var isFunction__default = /*#__PURE__*/_interopDefaultLegacy(isFunction); // prettier-ignore


var unique = (list, filterFn = isBe__default['default'], __tmp) => (__tmp = isFunction__default['default'](filterFn) ? filterFn : v => !includes__default['default'](filterFn, v), filterLeft__default['default'](list, (v, k) => indexOfLeft__default['default'](list, v) === k && __tmp(v, k, list)));

exports.default = unique;
exports.unique = unique;
