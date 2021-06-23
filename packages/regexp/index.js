'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
/* eslint-disable security/detect-non-literal-regexp */

var regexp = (pattern, flags) => new RegExp(pattern.map ? pattern.map(v => v.source || v).join('') : pattern.source || pattern, flags);

exports.default = regexp;
exports.regexp = regexp;
