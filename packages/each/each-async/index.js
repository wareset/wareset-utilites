'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var isObject = require('@wareset-utilites/is/is-object');

var keys = require('@wareset-utilites/object/keys');

var typed = require('@wareset-utilites/typed');

var array = require('@wareset-utilites/array/array');
/* eslint-disable max-len */


var eachAsync = async (object, callback) => {
  if (isObject.isObject(object)) {
    if (typed.typed.of(object, array.array, Set)) {
      var k = 0;

      for await (var v of object) {
        await callback(v, k, object, 'set'), k++;
      }
    } else if (typed.typed.of(object, Map)) {
      for await (var [_k, _v] of object) {
        await callback(_v, _k, object, 'map');
      }
    } else {
      for await (var _k2 of keys.keys(object)) {
        await callback(object[_k2], _k2, object, 'object');
      }
    }
  }

  return object;
};

exports.eachAsync = eachAsync;
