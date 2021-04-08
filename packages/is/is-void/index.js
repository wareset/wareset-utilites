'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var isNill = require('../is-nill');

var isVoid = v => v !== v || isNill.isNill(v);

exports.isVoid = isVoid;
