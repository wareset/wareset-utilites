'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var instanceOf = require('@wareset-utilites/lang/instance-of');

var isPromise = value => instanceOf.instanceOf(value, Promise);

exports.isPromise = isPromise;
