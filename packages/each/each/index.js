'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var isObject = require('@wareset-utilites/is/isObject');

var keys = require('@wareset-utilites/object/keys');

var typed = require('@wareset-utilites/typed');

var _Array = require('@wareset-utilites/array/Array');

var each = (s, i) => {
  if (isObject.isObject(s)) if (typed.typedOf(s, _Array.Array, Set)) {
    var t = 0;

    for (var e of s) {
      i(e, t, s, 'set'), t++;
    }
  } else if (typed.typedOf(s, Map)) for (var [_t, _e] of s) {
    i(_e, _t, s, 'map');
  } else for (var _t2 of keys.keys(s)) {
    i(s[_t2], _t2, s, 'object');
  }
  return s;
};

exports.default = each;
exports.each = each;
