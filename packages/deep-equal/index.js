'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var isNumber = require('@wareset-utilites/is/isNumber');

var isObject = require('@wareset-utilites/is/isObject');

var isFunction = require('@wareset-utilites/is/isFunction');

var isNativeFunction = require('@wareset-utilites/is/isNativeFunction');

var instanceOf = require('@wareset-utilites/lang/instanceOf');

var typed = require('@wareset-utilites/typed');

var Object$1 = require('@wareset-utilites/object/Object');

var getOwnPropertyNames = require('@wareset-utilites/object/getOwnPropertyNames');

var getOwnPropertySymbols = require('@wareset-utilites/object/getOwnPropertySymbols');

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {
    'default': e
  };
}

var isNumber__default = /*#__PURE__*/_interopDefaultLegacy(isNumber);

var isObject__default = /*#__PURE__*/_interopDefaultLegacy(isObject);

var isFunction__default = /*#__PURE__*/_interopDefaultLegacy(isFunction);

var isNativeFunction__default = /*#__PURE__*/_interopDefaultLegacy(isNativeFunction);

var instanceOf__default = /*#__PURE__*/_interopDefaultLegacy(instanceOf);

var Object__default = /*#__PURE__*/_interopDefaultLegacy(Object$1);

var getOwnPropertyNames__default = /*#__PURE__*/_interopDefaultLegacy(getOwnPropertyNames);

var getOwnPropertySymbols__default = /*#__PURE__*/_interopDefaultLegacy(getOwnPropertySymbols);
/* eslint-disable max-len */


var getProtoOwnPropNames = (a, keys, natives) => {
  typed.typedOf(a).forEach(p => {
    if (p && (natives || !isNativeFunction__default['default'](p))) {
      keys.push(...getOwnPropertyNames__default['default'](p.prototype));
    }
  });
};

var OPTIONS = {
  depth: true,
  symbols: true,
  immerse: true,
  noweaks: false,
  natives: false
};

var __deepEqual__ = (a, b, depth, options = OPTIONS, __cache__) => {
  if (a === b) return true;
  if (!(+depth > 0) || !isObject__default['default'](a) || !isObject__default['default'](b)) return a !== a && b !== b;
  var proto = typed.typed(a);
  if (proto !== typed.typed(b)) return false;
  if (!__cache__.has(a)) __cache__.set(a, b);else if (__cache__.get(a) === b) return true;
  if (isNumber__default['default'](depth)) depth--;

  var __da__ = (a, b) => __deepEqual__(a, b, depth, options, __cache__);

  var k, v, tmp;

  try {
    if (instanceOf__default['default'](a, ArrayBuffer)) a = new DataView(a), b = new DataView(b);

    if (ArrayBuffer.isView(a)) {
      if (a.byteLength !== b.byteLength) return false;
      a = new Float64Array(a.buffer), b = new Float64Array(b.buffer);

      for (k = a.byteLength; k-- > 0;) {
        if (a[k] !== b[k]) return false;
      }

      return true;
    }
  } catch (err) {
    /**/
  }

  if ((tmp = instanceOf__default['default'](a, Map)) || instanceOf__default['default'](a, Set)) {
    if (a.size !== b.size) return false;

    if (tmp) {
      for ([k] of a) {
        if (!b.has(k)) return false;
      }

      for ([k, v] of a) {
        if (!__da__(v, b.get(k))) return false;
      }
    } else for (v of a) {
      if (!b.has(v)) return false;
    }
  }

  if (options.noweaks && (instanceOf__default['default'](a, WeakMap) || instanceOf__default['default'](a, WeakSet))) {
    return false;
  }

  var keys = getOwnPropertyNames__default['default'](a);
  if (keys.length !== getOwnPropertyNames__default['default'](b).length) return false;

  if (options.immerse && (options.natives || !isNativeFunction__default['default'](proto))) {
    getProtoOwnPropNames(a, keys, options.natives);
  }

  if (instanceOf__default['default'](a, Error)) keys = keys.filter(v => v !== 'stack');

  for (v of keys) {
    if (!(v in b) || !__da__(a[v], b[v])) return false;
  }

  if (options.symbols && getOwnPropertySymbols__default['default']) {
    var symbols = getOwnPropertySymbols__default['default'](a);
    if (symbols.length !== getOwnPropertySymbols__default['default'](b).length) return false;

    for (v of symbols) {
      if (!(v in b) || !__da__(a[v], b[v])) return false;
    }
  }

  try {
    if (a.valueOf !== Object__default['default'].prototype.valueOf && isFunction__default['default'](a.valueOf)) {
      return __da__(a.valueOf(), b.valueOf());
    }

    if (a.toString !== Object__default['default'].prototype.toString && isFunction__default['default'](a.toString)) {
      return __da__(a.toString(), b.toString());
    }
  } catch (err) {
    return false;
  }

  return true; // proto === Object;
};

var deepEqual = (a, b, depth = true) => __deepEqual__(a, b, depth, OPTIONS, new Map());

var deepEqualExtended = (a, b, options = OPTIONS) => (options = { ...OPTIONS,
  ...options
}) && __deepEqual__(a, b, options.depth, options, new Map());

deepEqual.extended = deepEqualExtended;
exports.deepEqual = deepEqual;
exports.deepEqualExtended = deepEqualExtended;
exports.default = deepEqual;
