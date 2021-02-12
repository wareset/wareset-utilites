'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var isNumber = require('@wareset-utilites/is/is-number');

var isObject = require('@wareset-utilites/is/is-object');

var isFunction = require('@wareset-utilites/is/is-function');

var isNativeFunction = require('@wareset-utilites/is/is-native-function');

var instanceOf = require('@wareset-utilites/lang/instance-of');

var size = require('@wareset-utilites/lang/size');

var length = require('@wareset-utilites/lang/length');

var typed = require('@wareset-utilites/typed');

var objectPrototype = require('@wareset-utilites/object/object-prototype');

var getOwnPropertyNames = require('@wareset-utilites/object/get-own-property-names');

var getOwnPropertySymbols = require('@wareset-utilites/object/get-own-property-symbols');
/* eslint-disable max-len */


var getProtoOwnPropNames = (a, keys, natives) => {
  typed.typed.of(a).forEach(p => {
    if (p && (natives || !isNativeFunction.isNativeFunction(p))) {
      keys.push(...getOwnPropertyNames.getOwnPropertyNames(p.prototype));
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
var vOf = 'valueOf';
var toS = 'toString';
var undef;

var __deepEqual__ = (a, b, depth, options = OPTIONS, __cache__) => {
  if (a === b) return true;
  if (!(+depth > 0) || !isObject.isObject(a) || !isObject.isObject(b)) return a !== a && b !== b;
  var proto = typed.typed(a);
  if (proto !== typed.typed(b)) return false;
  if (!__cache__.has(a)) __cache__.set(a, b);else if (__cache__.get(a) === b) return true;
  if (isNumber.isNumber(depth)) depth--;

  var __da__ = (a, b) => __deepEqual__(a, b, depth, options, __cache__);

  var k, v, tmp;

  try {
    if (instanceOf.instanceOf(a, ArrayBuffer)) a = new DataView(a), b = new DataView(b);

    if (ArrayBuffer.isView(a)) {
      if (a.byteLength !== b.byteLength) return false;
      a = new Float64Array(a.buffer), b = new Float64Array(b.buffer);

      for (k = a.byteLength; k-- > 0; undef) {
        if (a[k] !== b[k]) return false;
      }

      return true;
    }
  } catch (err) {
    /**/
  }

  if ((tmp = instanceOf.instanceOf(a, Map)) || instanceOf.instanceOf(a, Set)) {
    if (size.size(a) !== size.size(b)) return false;

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

  if (options.noweaks && (instanceOf.instanceOf(a, WeakMap) || instanceOf.instanceOf(a, WeakSet))) {
    return false;
  }

  var keys = getOwnPropertyNames.getOwnPropertyNames(a);
  if (length.length(keys) !== length.length(getOwnPropertyNames.getOwnPropertyNames(b))) return false;

  if (options.immerse && (options.natives || !isNativeFunction.isNativeFunction(proto))) {
    getProtoOwnPropNames(a, keys, options.natives);
  }

  if (instanceOf.instanceOf(a, Error)) keys = keys.filter(v => v !== 'stack');

  for (v of keys) {
    if (!(v in b) || !__da__(a[v], b[v])) return false;
  }

  if (options.symbols && getOwnPropertySymbols.getOwnPropertySymbols) {
    var symbols = getOwnPropertySymbols.getOwnPropertySymbols(a);
    if (length.length(symbols) !== length.length(getOwnPropertySymbols.getOwnPropertySymbols(b))) return false;

    for (v of symbols) {
      if (!(v in b) || !__da__(a[v], b[v])) return false;
    }
  }

  try {
    if (a[vOf] !== objectPrototype.objectPrototype[vOf] && isFunction.isFunction(a[vOf])) {
      return __da__(a[vOf](), b[vOf]());
    }

    if (a[toS] !== objectPrototype.objectPrototype[toS] && isFunction.isFunction(a[toS])) {
      return __da__(a[toS](), b[toS]());
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
