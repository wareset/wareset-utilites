'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var isNull = require('../is-null');

var typeOf = require('@wareset-utilites/lang/type-of');

var isObject = value => !isNull.isNull(value) && typeOf.typeOf(value, 'object');

exports.isObject = isObject;
