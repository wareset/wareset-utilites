import { typed } from '@wareset-utilites/typed';

export const isSame = (a, b) => a === b;

export const isTrue = (v) => v === true;
export const isFalse = (v) => v === false;

export const isNull = (v) => v === null;
export const isUndef = (v) => v === undefined;

export const isVoid = (v) => v == null;
export const isBe = (v) => !isVoid(v);

export const isArr = Array.isArray;
export const isObj = (v) => typeof v === 'object' && v;
export const isNum = (v) => typeof v === 'number';
export const isStr = (v) => typeof v === 'string';
export const isSymb = (v) => typeof v === 'symbol';
export const isBool = (v) => typeof v === 'boolean';
export const isFunc = (v) => typeof v === 'function';

export const isRegExp = (v) => v instanceof RegExp;
export const isPromise = (v) => v instanceof Promise;

export const isArrStrict = (v) => typed(v) === Array;
export const isObjStrict = (v) => typed(v) === Object;

export const isFuncNative = (v) =>
  isFunc(v) && /\{\s*\[native code\]\s*\}\s*$/.test(v);
