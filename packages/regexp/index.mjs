import { test } from '@wareset-utilites/lang/test';
import { last } from '@wareset-utilites/lang/last';
import { length } from '@wareset-utilites/lang/length';
import { join } from '@wareset-utilites/array/join';
var flags;

var regexp = (...a) => (flags = length(a) < 2 || last(a).source || !test(/^[gim]+$/, last(a)) ? '' : a.pop(), new RegExp(join(a.map(v => v.source || v)), flags));

export default regexp;
export { regexp };
