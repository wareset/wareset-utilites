import { typeOf } from '@wareset-utilites/lang/type-of';

var isNumber = value => typeOf(value, 'number');

export { isNumber };
