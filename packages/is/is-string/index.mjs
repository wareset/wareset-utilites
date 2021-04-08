import { typeOf } from '@wareset-utilites/lang/type-of';
var example = typeOf('');

var isString = v => typeOf(v, example);

export { isString };
