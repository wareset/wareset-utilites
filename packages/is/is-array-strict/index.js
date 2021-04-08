'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var isArray = require('../is-array');

var typed = require('@wareset-utilites/typed');

var array = require('@wareset-utilites/array/array');

var isArrayStrict = v => isArray.isArray(v) && typed.typed(v, array.array);

exports.isArrayStrict = isArrayStrict;
