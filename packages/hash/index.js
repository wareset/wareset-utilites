'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var replace = require('@wareset-utilites/lang/replace');

var length = require('@wareset-utilites/lang/length');

var slice = require('@wareset-utilites/lang/slice'); // export const hash = (string) => {
//   string = ('' + string).replace(/\r/g, '')
//   let hash = 999999999999989 // 604661760000000;
//   let i = string.length
//   while (i--) hash += (hash << 33) * string.charCodeAt(i)
//   return (hash < 0 ? -hash : hash).toString(36)
// }


var hash = (string, maxLength = 8) => {
  string = replace.replace('' + string, /\r/g);
  var hash = -60466176001; // 999999999999989 // 604661760000000;

  var i = length.length(string);

  while (i--) {
    hash -= ~((hash << 33) * string.charCodeAt(i));
  }

  hash = (hash < 0 ? -hash : hash).toString(36);
  return maxLength ? slice.slice(hash + hash, 0, maxLength) : hash;
};

exports.default = hash;
exports.hash = hash;
