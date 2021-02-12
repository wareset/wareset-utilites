'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var typeOf = require('@wareset-utilites/lang/type-of');

var isNumber = value => typeOf.typeOf(value, 'number');

exports.isNumber = isNumber;
