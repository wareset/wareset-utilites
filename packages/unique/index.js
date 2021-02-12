'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var indexOf = require('@wareset-utilites/lang/index-of');

var includes = require('@wareset-utilites/lang/includes'); // function globals() {


var unique = (list, filter = ['', NaN, null, undefined]) => list.filter((v, k, a) => indexOf.indexOf(a, v) === k && !includes.includes(filter, v));

exports.default = unique;
exports.unique = unique;
