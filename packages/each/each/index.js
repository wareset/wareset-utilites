'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var isObject = require('@wareset-utilites/is/is-object');

var keys = require('@wareset-utilites/object/keys');

var typed = require('@wareset-utilites/typed');
/* eslint-disable max-len */


var each = (object, callback) => {
  if (isObject.isObject(object)) {
    if (typed.typed.of(object, Array, Set)) {
      var k = 0;

      for (var v of object) {
        callback(v, k, object, 'set'), k++;
      }
    } else if (typed.typed.of(object, Map)) {
      for (var [_k, _v] of object) {
        callback(_v, _k, object, 'map');
      }
    } else {
      for (var _k2 of keys.keys(object)) {
        callback(object[_k2], _k2, object, 'object');
      }
    }
  }

  return object;
};

exports.each = each;
