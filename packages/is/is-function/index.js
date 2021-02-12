'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var typeOf = require('@wareset-utilites/lang/type-of');

var isFunction = value => typeOf.typeOf(value, 'function');

exports.isFunction = isFunction;
