import { instanceOf } from '@wareset-utilites/lang/instance-of';

var isRegExp = value => instanceOf(value, RegExp);

export { isRegExp };
