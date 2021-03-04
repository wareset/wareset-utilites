import { lastIndexOf } from '@wareset-utilites/lang/last-index-of';
import { length } from '@wareset-utilites/lang/length';
import { abs } from '@wareset-utilites/math';
/* eslint-disable max-len */

var __searchlen__;

var __stringlen__; // prettier-ignore


var endsWith = (string, search, position = 0) => !!((__searchlen__ = length(search)) && (__stringlen__ = length(string)) >= __searchlen__ && lastIndexOf(string, search, __stringlen__ -= abs(position)) === __stringlen__ - __searchlen__);

export { endsWith };
