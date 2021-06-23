'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var isObject = require('@wareset-utilites/is/isObject');

var keys = require('@wareset-utilites/object/keys');

var typed = require('@wareset-utilites/typed');

var Array = require('@wareset-utilites/array/Array');

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {
    'default': e
  };
}

var isObject__default = /*#__PURE__*/_interopDefaultLegacy(isObject);

var keys__default = /*#__PURE__*/_interopDefaultLegacy(keys);

var Array__default = /*#__PURE__*/_interopDefaultLegacy(Array);
/* eslint-disable max-len */


var each = (object, callback) => {
  if (isObject__default['default'](object)) {
    if (typed.typedOf(object, Array__default['default'], Set)) {
      var k = 0;

      for (var v of object) {
        callback(v, k, object, 'set'), k++;
      }
    } else if (typed.typedOf(object, Map)) {
      for (var [_k, _v] of object) {
        callback(_v, _k, object, 'map');
      }
    } else {
      for (var _k2 of keys__default['default'](object)) {
        callback(object[_k2], _k2, object, 'object');
      }
    }
  }

  return object;
};

exports.default = each;
exports.each = each;
