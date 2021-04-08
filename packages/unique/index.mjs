import { indexOf } from '@wareset-utilites/lang/index-of';
import { includes } from '@wareset-utilites/lang/includes';
import { isBe } from '@wareset-utilites/is/is-be';
import { isFunction } from '@wareset-utilites/is/is-function'; // prettier-ignore

var unique = (list, filter = isBe, __tmp) => (__tmp = isFunction(filter) ? filter : v => !includes(filter, v), list.filter((v, k, a) => indexOf(a, v) === k && __tmp(v, k, a)));

export default unique;
export { unique };
