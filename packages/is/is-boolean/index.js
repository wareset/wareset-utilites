'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var typeOf = require('@wareset-utilites/lang/type-of');

var isBoolean = value => typeOf.typeOf(value, 'boolean');

exports.isBoolean = isBoolean;
