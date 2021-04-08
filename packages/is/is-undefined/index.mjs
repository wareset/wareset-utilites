import { typeOf } from '@wareset-utilites/lang/type-of';
var undef;
var example = typeOf(undef);

var isUndefined = v => typeOf(v, example);

export { isUndefined };
