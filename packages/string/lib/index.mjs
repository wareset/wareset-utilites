import { test } from '@wareset-utilites/lang/test';
import { length } from '@wareset-utilites/lang/length';
import { push } from '@wareset-utilites/array/push';
import { join } from '@wareset-utilites/array/join';
import { filter } from '@wareset-utilites/array/filter';
/* eslint-disable security/detect-non-literal-regexp */

var __dash__ = '-';
var __empty__ = '';
var __space__ = ' ';
var __underline__ = '_';
var __trimer__ = '\\s';

var __regexp__ = s => new RegExp(s, 'g');

var lowercase = __empty__.toLocaleLowerCase || __empty__.toLowerCase;

var toLowercase = string => lowercase.call(string);

var uppercase = __empty__.toLocaleUpperCase || __empty__.toUpperCase;

var toUppercase = string => uppercase.call(string);

var __regPCA__ = /[\d$]/;

var __toArrayCase__ = s => {
  s += __dash__;
  var len = length(s);
  var i = -1;
  var current = __empty__;
  var words = [];
  var isUL;
  var isBreak = !isUL;
  var char, charUpper, charLower;

  while (++i < len) {
    char = s.charAt(i);
    charLower = toLowercase(char);
    charUpper = toUppercase(char);

    if (charUpper !== charLower || test(__regPCA__, char)) {
      if (isBreak || !isUL !== (char === charUpper)) {
        if (current) {
          if (length(current) > 1) current += __dash__;
          push(words, current);
        }

        current = charLower;
      } else current += charLower;

      isUL = isBreak || isUL || char !== charUpper;
      isBreak = false;
    } else {
      if (current) {
        if (length(current) > 1) current = __dash__ + current + __dash__;
        push(words, current), current = __dash__;
      } // if (test(__regPCA__, char)) current += charLower


      isBreak = true;
    }
  }

  words = filter(join(words, __empty__).split(__dash__), v => !!v); // console.log(s, words)

  return words;
};

export { __dash__, __empty__, __regexp__, __space__, __toArrayCase__, __trimer__, __underline__, toLowercase, toUppercase };
