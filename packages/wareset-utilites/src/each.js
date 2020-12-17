import { typed } from '@wareset-utilites/typed';
import { isObj } from './is';
import { keys } from './other';

export const each = (obj, cb) => {
  if (!isObj(obj)) throw new TypeError(obj);
  let k = 0;
  if (typed.of(obj, Array, Set, WeakSet)) {
    for (const v of obj) cb(v, k, obj, 'set'), k++;
    return obj;
  }
  if (typed.of(obj, Map, WeakMap)) {
    for (const [k, v] of obj) cb(v, k, obj, 'map');
    return obj;
  }
  for (const k of keys(obj)) cb(obj[k], k, obj, 'object');
  return obj;
};

export const eachAsync = async (obj, cb) => {
  if (!isObj(obj)) throw new TypeError(obj);
  let k = 0;
  if (typed.of(obj, Array, Set, WeakSet)) {
    for await (const v of obj) await cb(v, k, obj, 'set'), k++;
    return obj;
  }
  if (typed.of(obj, Map, WeakMap)) {
    for await (const [k, v] of obj) await cb(v, k, obj, 'map');
    return obj;
  }
  for await (const k of keys(obj)) await cb(obj[k], k, obj, 'object');
  return obj;
};
