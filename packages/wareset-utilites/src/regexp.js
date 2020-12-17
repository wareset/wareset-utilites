import { isVoid, isRegExp } from './is';

export const regexp = (...a) => {
  const flags = a.length < 2 || isRegExp(a[a.length - 1]) ? '' : a.pop();
  let regexp = '';
  a.forEach((v) => !isVoid(v) && (regexp += isRegExp(v) ? v.source : v));
  return regexp ? new RegExp(regexp, flags) : null;
};
