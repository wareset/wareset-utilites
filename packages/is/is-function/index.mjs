import { noop } from '@wareset-utilites/lang/noop';
import { typeOf } from '@wareset-utilites/lang/type-of';
var example = typeOf(noop);

var isFunction = v => typeOf(v, example);

export { isFunction };
