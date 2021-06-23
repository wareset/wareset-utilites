'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var c = 'constructor',
    p = 'prototype',
    l = 'length',
    s = 'some';

var getProto = Object.getPrototypeOf || (v => v.__proto__);

var getPrototypeOf = v => v == null ? v : getProto(v);

var getProtoFn = v => !v || !v[c] || v[c][p] !== v ? v : v[c];

var getCtor = v => v = getProtoFn(getPrototypeOf(v));

var getCtors = (v, protos = []) => {
  do {
    v = getPrototypeOf(v), protos.push(getProtoFn(v));
  } while (v);

  return protos;
};

var eq = (a, b) => a === b || a === getCtor(b) && (!b[p] || typeof b !== 'function');

var check = fn => (value, ...t) => {
  if (t[l] && !fn(value, ...t)) throw new TypeError('' + value);
  return value;
};

var typedOf = (val, ...types) => (val = getCtors(val), !types[l] ? val : val[s](ctor => types[s](t => eq(ctor, t))));

typedOf.check = check(typedOf);

var typed = (val, ...types) => (val = getCtor(val), !types[l] ? val : types[s](t => eq(val, t)));

typed.check = check(typed);
typed.of = typedOf;
exports.default = typed;
exports.typed = typed;
exports.typedOf = typedOf;
