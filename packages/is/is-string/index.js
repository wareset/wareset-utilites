'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var typeOf = require('@wareset-utilites/lang/type-of');

var example = typeOf.typeOf('');

var isString = v => typeOf.typeOf(v, example);

exports.isString = isString;
