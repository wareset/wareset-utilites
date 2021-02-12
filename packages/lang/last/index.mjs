import { length } from '../length';

var last = (v, offset = 0) => v[length(v) - 1 - offset];

export { last };
