'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var indexOf = require('../index-of');

var includes = (source, value) => indexOf.indexOf(source, value) >= 0;

exports.includes = includes;
