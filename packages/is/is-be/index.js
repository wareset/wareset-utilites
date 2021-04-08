'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var isVoid = require('../is-void');

var isBe = v => !isVoid.isVoid(v);

exports.isBe = isBe;
