'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var typeOf = require('@wareset-utilites/lang/type-of');

var undef;
var example = typeOf.typeOf(undef);

var isUndefined = v => typeOf.typeOf(v, example);

exports.isUndefined = isUndefined;
