'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var noop = require('@wareset-utilites/lang/noop');

var typeOf = require('@wareset-utilites/lang/type-of');

var example = typeOf.typeOf(noop.noop);

var isFunction = v => typeOf.typeOf(v, example);

exports.isFunction = isFunction;
