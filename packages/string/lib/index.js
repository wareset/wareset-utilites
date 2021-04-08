'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var test = require('@wareset-utilites/lang/test');

var length = require('@wareset-utilites/lang/length');

var push = require('@wareset-utilites/array/push');

var join = require('@wareset-utilites/array/join');

var filter = require('@wareset-utilites/array/filter');
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
  var len = length.length(s);
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

    if (charUpper !== charLower || test.test(__regPCA__, char)) {
      if (isBreak || !isUL !== (char === charUpper)) {
        if (current) {
          if (length.length(current) > 1) current += __dash__;
          push.push(words, current);
        }

        current = charLower;
      } else current += charLower;

      isUL = isBreak || isUL || char !== charUpper;
      isBreak = false;
    } else {
      if (current) {
        if (length.length(current) > 1) current = __dash__ + current + __dash__;
        push.push(words, current), current = __dash__;
      } // if (test(__regPCA__, char)) current += charLower


      isBreak = true;
    }
  }

  words = filter.filter(join.join(words, __empty__).split(__dash__), v => !!v); // console.log(s, words)

  return words;
};

exports.__dash__ = __dash__;
exports.__empty__ = __empty__;
exports.__regexp__ = __regexp__;
exports.__space__ = __space__;
exports.__toArrayCase__ = __toArrayCase__;
exports.__trimer__ = __trimer__;
exports.__underline__ = __underline__;
exports.toLowercase = toLowercase;
exports.toUppercase = toUppercase;
