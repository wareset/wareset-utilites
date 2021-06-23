'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var lib = require('../lib');

var trim = (string, trimer) => trimer ? string.replace(lib.__regexp__(`^[${trimer}]+|[${trimer}]+$`), lib.$EMPTY) : string.trim();

exports.default = trim;
exports.trim = trim;
