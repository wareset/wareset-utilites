const getProto = Object.getPrototypeOf || ((v: any): any => v.__proto__);
const getPrototypeOf = (v: any): any => (v == null ? v : getProto(v));
const getProtoFn = (v: any): any =>
  !v || v.constructor.prototype !== v ? v : v.constructor;

const getCtor = (v: any): Function | object =>
  (v = getProtoFn(getPrototypeOf(v)));
const getCtors = (v: any): Array<Function | object> => {
  const protos = [];
  do (v = getPrototypeOf(v)), protos.push(getProtoFn(v));
  while (v);
  return protos;
};

const eq = (a: any, b: any): boolean =>
  a === b || (a === getCtor(b) && (!b.prototype || typeof b !== 'function'));
// const cases = (t) =>
//   getCtor(t[0]) === Array && t[0].length ? [...t.shift(), ...t] : t;

const check = (fn: Function) => (value: any, ...t: any[]): any => {
  if (t.length && !fn(value, ...t)) throw new TypeError(value);
  return value;
};

// eslint-disable-next-line no-redeclare
function typedOf(value: any): Array<Function | object | null | undefined>;
// eslint-disable-next-line no-redeclare
function typedOf(
  value: any,
  ...types: Array<Function | object | null | undefined>
): boolean;
// eslint-disable-next-line no-redeclare
function typedOf(
  value: any,
  ...types: Array<Function | object | null | undefined>
): Array<Function | object | null | undefined> | boolean {
  const ctors = getCtors(value);
  if (!types.length) return ctors;
  return ctors.some((ctor) => types.some((t) => eq(ctor, t)));
}
typedOf.check = check(typedOf);

// eslint-disable-next-line no-redeclare
function typed(value: any): Function | object | null | undefined;
// eslint-disable-next-line no-redeclare
function typed(
  value: any,
  ...types: Array<Function | object | null | undefined>
): boolean;
// eslint-disable-next-line no-redeclare
function typed(
  value: any,
  ...types: Array<Function | object | null | undefined>
): Function | object | null | undefined | boolean {
  const ctor = getCtor(value);
  return !types.length ? ctor : types.some((t) => eq(ctor, t));
}
typed.check = check(typed);
typed.of = typedOf;

export default typed;
export { typed, typedOf };
