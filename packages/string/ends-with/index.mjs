import { lastIndexOf } from '@wareset-utilites/lang/last-index-of';
import { length } from '@wareset-utilites/lang/length';
/* eslint-disable max-len */

var __searchlen__;

var __stringlen__; // prettier-ignore


var endsWith = (string, search, position = length(string)) => !!((__searchlen__ = length(search)) && (__stringlen__ = length(string)) >= __searchlen__ && lastIndexOf(string, search) === position - __searchlen__ + (position < 0 ? __stringlen__ : 0));

export { endsWith };
