import { instanceOf } from '@wareset-utilites/lang/instance-of';

var isPromise = v => instanceOf(v, Promise);

export { isPromise };
