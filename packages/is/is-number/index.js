'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var typeOf = require('@wareset-utilites/lang/type-of');

var example = typeOf.typeOf(1);

var isNumber = v => typeOf.typeOf(v, example);

exports.isNumber = isNumber;
