import { typeOf } from '@wareset-utilites/lang/type-of';

var isBoolean = value => typeOf(value, 'boolean');

export { isBoolean };
