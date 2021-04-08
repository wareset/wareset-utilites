import { instanceOf } from '@wareset-utilites/lang/instance-of';

var isRegExp = v => instanceOf(v, RegExp);

export { isRegExp };
