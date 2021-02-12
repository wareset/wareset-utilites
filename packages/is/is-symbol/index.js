'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var typeOf = require('@wareset-utilites/lang/type-of');

var isSymbol = value => typeOf.typeOf(value, 'symbol');

exports.isSymbol = isSymbol;
