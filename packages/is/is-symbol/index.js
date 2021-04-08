'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var typeOf = require('@wareset-utilites/lang/type-of');

var isSymbol = v => typeOf.typeOf(v, 'symbol');

exports.isSymbol = isSymbol;
