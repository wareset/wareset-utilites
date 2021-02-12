'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var indexOf = require('@wareset-utilites/lang/index-of');

var length = require('@wareset-utilites/lang/length');
/* eslint-disable max-len */


var __searchlen__; // prettier-ignore


var startsWith = (string, search, position = 0) => !!((__searchlen__ = length.length(search)) && length.length(string) >= __searchlen__ && indexOf.indexOf(string, search, position) === position);

exports.startsWith = startsWith;
