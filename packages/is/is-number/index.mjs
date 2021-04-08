import { typeOf } from '@wareset-utilites/lang/type-of';
var example = typeOf(1);

var isNumber = v => typeOf(v, example);

export { isNumber };
