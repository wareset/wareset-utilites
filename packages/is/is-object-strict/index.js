'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var isObject = require('../is-object');

var typed = require('@wareset-utilites/typed');

var isObjectStrict = value => isObject.isObject(value) && typed.typed(value, Object, null);

exports.isObjectStrict = isObjectStrict;
