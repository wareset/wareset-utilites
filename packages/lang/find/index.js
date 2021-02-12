'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var undef;

var find = (list, cb, _) => list.some((v, k, a) => cb(_ = v, k, a)) ? _ : undef;

exports.find = find;
