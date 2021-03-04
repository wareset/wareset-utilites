'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var replace = require('../replace');

var lib = require('../lib');

var trim = (string, trimer) => trimer ? replace.replace(string, lib.__regexp__(`^[${trimer}]+|[${trimer}]+$`)) : string.trim();

exports.trim = trim;
