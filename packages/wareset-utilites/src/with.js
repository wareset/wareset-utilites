import { isSame } from './is';

export const startsWith = (str = '', v = '', pos = 0) =>
  v.length && str.length >= v.length && isSame(str.indexOf(v, pos), pos);

// prettier-ignore
export const endsWith = (str = '', v = '', pos = str.length) =>
  v.length && str.length >= v.length &&
  isSame(str.lastIndexOf(v), pos - v.length + (pos < 0 ? str.length : 0));
