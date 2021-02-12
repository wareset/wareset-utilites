'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var isVoid = require('../is-void');

var isBe = value => !isVoid.isVoid(value);

exports.isBe = isBe;
