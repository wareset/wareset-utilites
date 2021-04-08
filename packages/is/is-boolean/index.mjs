import { typeOf } from '@wareset-utilites/lang/type-of';
var example = typeOf(true);

var isBoolean = v => typeOf(v, example);

export { isBoolean };
