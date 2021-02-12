import { test } from '@wareset-utilites/lang/test';
import { isFunction } from '../is-function';

var isNativeFunction = value => isFunction(value) && test(/\{\s*\[native code\]\s*\}\s*$/, value);

export { isNativeFunction };
