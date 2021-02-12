import { replace } from '@wareset-utilites/lang/replace';
import { __trimer__, __regexp__ } from '../lib';

var trimRight = (string, trimer = __trimer__) => replace(string, __regexp__(`[${trimer}]+$`));

export { trimRight };
