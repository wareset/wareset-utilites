var size = v => v.length;

var c = 'constructor';
var p = 'prototype';

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
  if (size(t) && !fn(value, ...t)) throw new TypeError('' + value);
  return value;
};

var typedOf = (val, ...types) => (val = getCtors(val), !size(types) ? val : val.some(ctor => types.some(t => eq(ctor, t))));

typedOf.check = check(typedOf);

var typed = (val, ...types) => (val = getCtor(val), !size(types) ? val : types.some(t => eq(val, t)));

typed.check = check(typed);
typed.of = typedOf;
export default typed;
export { typed, typedOf };
