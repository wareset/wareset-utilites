'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var isNull = require('../is-null');

var typeOf = require('@wareset-utilites/lang/type-of');

var example = typeOf.typeOf({});

var isObject = v => !isNull.isNull(v) && typeOf.typeOf(v, example);

exports.isObject = isObject;
