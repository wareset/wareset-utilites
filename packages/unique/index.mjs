import { indexOfLeft } from '@wareset-utilites/array/indexOfLeft';
import { filterLeft } from '@wareset-utilites/array/filterLeft';
import { isFunction } from '@wareset-utilites/is/isFunction';
import { includes } from '@wareset-utilites/array/includes';
import { isBe } from '@wareset-utilites/is/isBe';

var unique = (o, a = isBe, u) => (u = isFunction(a) ? a : t => !includes(a, t), filterLeft(o, (e, i) => indexOfLeft(o, e) === i && u(e, i, o)));

export default unique;
export { unique };
