'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var isNill = require('../is-nill');

var isVoid = value => value !== value || isNill.isNill(value);

exports.isVoid = isVoid;
