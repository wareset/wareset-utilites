import { typeOf } from '@wareset-utilites/lang/type-of';

var isFunction = value => typeOf(value, 'function');

export { isFunction };
