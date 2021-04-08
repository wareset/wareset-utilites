'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var isArray = require('@wareset-utilites/is/is-array');

var isNumber = require('@wareset-utilites/is/is-number');

var indexOf = require('@wareset-utilites/lang/index-of');

var length = require('@wareset-utilites/lang/length');

var math = require('@wareset-utilites/math'); // export interface INearly {
//   (value: number, pattern: number | number[], method?: -1 | 0 | 1): number
// }


var nearly = (() => {
  var METHODS_FOR_NUM = {
    '-1': math.floor,
    '0': math.round,
    '1': math.ceil
  };
  var METHODS_FOR_ARR = {
    '-1': (a = 0, b = 0, c = 0) => math.abs(a - c) <= math.abs(b - c),
    '0': (a = 0, b = 0, c = 0) => math.abs(a - c) < math.abs(b - c),
    '1': null
  };
  return (value = 1, pattern, method = 0) => {
    var res;

    if (isArray.isArray(pattern)) {
      if (!length.length(pattern)) res = value;else {
        var f = METHODS_FOR_ARR[method] || METHODS_FOR_ARR[0];
        res = pattern.reduce((prev, curr) => f(prev, curr, value) ? prev : curr);
      }
    } else if (pattern && isNumber.isNumber(pattern)) {
      pattern = math.abs(pattern);
      var coef = math.abs(value % pattern);
      var fin = value - coef;
      fin = +method > 0 || !method && coef > pattern / 2 ? fin + pattern : fin;
      var str = `${pattern}`;
      var index = indexOf.indexOf(str, '.');
      res = index === -1 ? fin : +fin.toFixed(length.length(str) - index - 1);
    } else res = (METHODS_FOR_NUM[method] || METHODS_FOR_NUM[0])(value);

    return res;
  };
})();

exports.default = nearly;
exports.nearly = nearly;
