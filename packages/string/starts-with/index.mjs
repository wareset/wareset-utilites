import { indexOf } from '@wareset-utilites/lang/index-of';
import { length } from '@wareset-utilites/lang/length';
import { abs } from '@wareset-utilites/math';
/* eslint-disable max-len */

var __searchlen__; // prettier-ignore


var startsWith = (string, search, position = 0) => !!((__searchlen__ = length(search)) && length(string) >= __searchlen__ && indexOf(string, search, position = abs(position)) === position);

export { startsWith };
