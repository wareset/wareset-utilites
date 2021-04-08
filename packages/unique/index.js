'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var indexOf = require('@wareset-utilites/lang/index-of');

var includes = require('@wareset-utilites/lang/includes');

var isBe = require('@wareset-utilites/is/is-be');

var isFunction = require('@wareset-utilites/is/is-function'); // prettier-ignore


var unique = (list, filter = isBe.isBe, __tmp) => (__tmp = isFunction.isFunction(filter) ? filter : v => !includes.includes(filter, v), list.filter((v, k, a) => indexOf.indexOf(a, v) === k && __tmp(v, k, a)));

exports.default = unique;
exports.unique = unique;
