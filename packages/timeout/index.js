'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var timeout = (t, e) => new Promise(o => setTimeout(() => o(e && e()), t || 0));

exports.default = timeout;
exports.timeout = timeout;
