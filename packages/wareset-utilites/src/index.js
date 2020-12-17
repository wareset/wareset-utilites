import { typed } from '@wareset-utilites/typed';
import { isVoid, isObj, isFunc } from './is';
import { noop, keys } from './other';

export { typed };
export * from './each';
export * from './hash';
export * from './is';
export * from './other';
export * from './owns';
export * from './regexp';
export * from './trim';
export * from './with';

// export const getPrototype = Object.getPrototypeOf || ((v) => v.__proto__);

export const inArr = (obj, v, k = 0) => obj.indexOf(v, k) > -1;
export const inObj = (obj, v, k = 0) => {
  if (!isObj(obj)) throw new TypeError(obj);
  if (typed.of(obj, Array)) return inArr(obj, v, k);
  if (typed.of(obj, Set, WeakSet, Map, WeakMap)) return obj.has(v);
  return v in obj; // keys(obj).indexOf(v, k) > -1;
};

export const trycatch = (tryFn, catchFn) => {
  let res;
  try {
    res = tryFn();
  } catch (error) {
    console.warn(error);
    res = isFunc(catchFn) ? catchFn(error) : catchFn;
  }
  return isVoid(res) ? null : res;
};

export const timeout = (time, cb) => {
  (time = +time || 0), (cb = cb || noop);
  return new Promise((resolve) => setTimeout(() => resolve(cb()), time));
};
