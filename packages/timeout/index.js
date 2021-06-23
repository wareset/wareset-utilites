'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var timeout = (msec = 1, callback = () => {}) => new Promise(res => setTimeout(() => res(callback()), msec));

exports.default = timeout;
exports.timeout = timeout;
