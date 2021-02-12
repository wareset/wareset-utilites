import { isNumber } from '@wareset-utilites/is/is-number';
import { isObject } from '@wareset-utilites/is/is-object';
import { isFunction } from '@wareset-utilites/is/is-function';
import { isNativeFunction } from '@wareset-utilites/is/is-native-function';
import { instanceOf } from '@wareset-utilites/lang/instance-of';
import { size } from '@wareset-utilites/lang/size';
import { length } from '@wareset-utilites/lang/length';
import { typed } from '@wareset-utilites/typed';
import { objectPrototype } from '@wareset-utilites/object/object-prototype';
import { getOwnPropertyNames } from '@wareset-utilites/object/get-own-property-names';
import { getOwnPropertySymbols } from '@wareset-utilites/object/get-own-property-symbols';
/* eslint-disable max-len */

var getProtoOwnPropNames = (a, keys, natives) => {
  typed.of(a).forEach(p => {
    if (p && (natives || !isNativeFunction(p))) {
      keys.push(...getOwnPropertyNames(p.prototype));
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
  if (!(+depth > 0) || !isObject(a) || !isObject(b)) return a !== a && b !== b;
  var proto = typed(a);
  if (proto !== typed(b)) return false;
  if (!__cache__.has(a)) __cache__.set(a, b);else if (__cache__.get(a) === b) return true;
  if (isNumber(depth)) depth--;

  var __da__ = (a, b) => __deepEqual__(a, b, depth, options, __cache__);

  var k, v, tmp;

  try {
    if (instanceOf(a, ArrayBuffer)) a = new DataView(a), b = new DataView(b);

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

  if ((tmp = instanceOf(a, Map)) || instanceOf(a, Set)) {
    if (size(a) !== size(b)) return false;

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

  if (options.noweaks && (instanceOf(a, WeakMap) || instanceOf(a, WeakSet))) {
    return false;
  }

  var keys = getOwnPropertyNames(a);
  if (length(keys) !== length(getOwnPropertyNames(b))) return false;

  if (options.immerse && (options.natives || !isNativeFunction(proto))) {
    getProtoOwnPropNames(a, keys, options.natives);
  }

  if (instanceOf(a, Error)) keys = keys.filter(v => v !== 'stack');

  for (v of keys) {
    if (!(v in b) || !__da__(a[v], b[v])) return false;
  }

  if (options.symbols && getOwnPropertySymbols) {
    var symbols = getOwnPropertySymbols(a);
    if (length(symbols) !== length(getOwnPropertySymbols(b))) return false;

    for (v of symbols) {
      if (!(v in b) || !__da__(a[v], b[v])) return false;
    }
  }

  try {
    if (a[vOf] !== objectPrototype[vOf] && isFunction(a[vOf])) {
      return __da__(a[vOf](), b[vOf]());
    }

    if (a[toS] !== objectPrototype[toS] && isFunction(a[toS])) {
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
export default deepEqual;
export { deepEqual, deepEqualExtended };
