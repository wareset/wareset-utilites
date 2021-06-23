import indexOfLeft from '@wareset-utilites/array/indexOfLeft';
import filterLeft from '@wareset-utilites/array/filterLeft';
import includes from '@wareset-utilites/array/includes';
import isBe from '@wareset-utilites/is/isBe';
import isFunction from '@wareset-utilites/is/isFunction'; // prettier-ignore

var unique = (list, filterFn = isBe, __tmp) => (__tmp = isFunction(filterFn) ? filterFn : v => !includes(filterFn, v), filterLeft(list, (v, k) => indexOfLeft(list, v) === k && __tmp(v, k, list)));

export default unique;
export { unique };
