'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _RegExp = require('@wareset-utilites/lang/RegExp');

var regexp = (p, r) => new _RegExp.RegExp(p.map ? p.map(e => e.source || e).join('') : p.source || p, r);

exports.default = regexp;
exports.regexp = regexp;
