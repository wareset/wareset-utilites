import { typeOf } from '@wareset-utilites/lang/type-of';

var isString = value => typeOf(value, 'string');

export { isString };
