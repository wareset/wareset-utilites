'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var lib = require('../lib');

var trim = (i, m) => m ? i.replace(lib.__regexp__(`^[${m}]+|[${m}]+$`), lib.$EMPTY) : i.trim();

exports.default = trim;
exports.trim = trim;
