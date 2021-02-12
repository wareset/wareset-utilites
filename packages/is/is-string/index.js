'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var typeOf = require('@wareset-utilites/lang/type-of');

var isString = value => typeOf.typeOf(value, 'string');

exports.isString = isString;
