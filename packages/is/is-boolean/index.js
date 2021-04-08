'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var typeOf = require('@wareset-utilites/lang/type-of');

var example = typeOf.typeOf(true);

var isBoolean = v => typeOf.typeOf(v, example);

exports.isBoolean = isBoolean;
