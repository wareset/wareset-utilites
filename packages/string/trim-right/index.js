'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var replace = require('@wareset-utilites/lang/replace');

var lib = require('../lib');

var trimRight = (string, trimer = lib.__trimer__) => replace.replace(string, lib.__regexp__(`[${trimer}]+$`));

exports.trimRight = trimRight;
