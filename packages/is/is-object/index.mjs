import { isNull } from '../is-null';
import { typeOf } from '@wareset-utilites/lang/type-of';
var example = typeOf({});

var isObject = v => !isNull(v) && typeOf(v, example);

export { isObject };
