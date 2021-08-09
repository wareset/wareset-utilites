'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var indexOfLeft = require('@wareset-utilites/array/indexOfLeft');

var filterLeft = require('@wareset-utilites/array/filterLeft');

var isFunction = require('@wareset-utilites/is/isFunction');

var includes = require('@wareset-utilites/array/includes');

var isBe = require('@wareset-utilites/is/isBe');

var unique = (o, a = isBe.isBe, u) => (u = isFunction.isFunction(a) ? a : t => !includes.includes(a, t), filterLeft.filterLeft(o, (e, i) => indexOfLeft.indexOfLeft(o, e) === i && u(e, i, o)));

exports.default = unique;
exports.unique = unique;
