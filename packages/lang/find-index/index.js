'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var findIndex = (list, callback, _) => list.some((v, k, a) => callback(v, _ = k, a)) ? _ : -1;

exports.findIndex = findIndex;
