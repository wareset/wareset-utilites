import { isNull } from '../is-null';
import { typeOf } from '@wareset-utilites/lang/type-of';

var isObject = value => !isNull(value) && typeOf(value, 'object');

export { isObject };
