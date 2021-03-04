import { length } from '../length';
import { abs } from '@wareset-utilites/math';

var last = (v, offset = 0) => v[length(v) - 1 - abs(offset)];

export { last };
