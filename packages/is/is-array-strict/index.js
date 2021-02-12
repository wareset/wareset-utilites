'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var isArray = require('../is-array');

var typed = require('@wareset-utilites/typed');

var isArrayStrict = value => isArray.isArray(value) && typed.typed(value, Array);

exports.isArrayStrict = isArrayStrict;
