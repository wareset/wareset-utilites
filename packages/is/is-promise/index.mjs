import { instanceOf } from '@wareset-utilites/lang/instance-of';

var isPromise = value => instanceOf(value, Promise);

export { isPromise };
