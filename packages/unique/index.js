'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var array = require('@wareset-utilites/array');

var includes = require('@wareset-utilites/array/includes'); // function globals() {


var unique = (list, filter = ['', NaN, null, undefined]) => list.filter((v, k, a) => array.indexOf(a, v) === k && !includes.includes(filter, v));

exports.default = unique;
exports.unique = unique;
