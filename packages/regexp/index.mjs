import { test } from '@wareset-utilites/lang/test';
import { last } from '@wareset-utilites/lang/last';
import { length } from '@wareset-utilites/lang/length';
var flags;

var regexp = (...a) => (flags = length(a) < 2 || last(a).source || !test(/^[gim]+$/, last(a)) ? '' : a.pop(), new RegExp(a.map(v => v.source || v).join(''), flags));

export default regexp;
export { regexp };
