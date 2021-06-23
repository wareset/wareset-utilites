'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var isArray = require('@wareset-utilites/is/isArray');

var isNumber = require('@wareset-utilites/is/isNumber');

var math = require('@wareset-utilites/math');

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {
    'default': e
  };
}

var isArray__default = /*#__PURE__*/_interopDefaultLegacy(isArray);

var isNumber__default = /*#__PURE__*/_interopDefaultLegacy(isNumber); // export interface INearly {
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

    if (isArray__default['default'](pattern)) {
      if (!pattern.length) res = value;else {
        var f = METHODS_FOR_ARR[method] || METHODS_FOR_ARR[0];
        res = pattern.reduce((prev, curr) => f(prev, curr, value) ? prev : curr);
      }
    } else if (pattern && isNumber__default['default'](pattern)) {
      pattern = math.abs(pattern);
      var coef = math.abs(value % pattern);
      var fin = value - coef;
      fin = +method > 0 || !method && coef > pattern / 2 ? fin + pattern : fin;
      var str = `${pattern}`;
      var index = str.indexOf('.');
      res = index === -1 ? fin : +fin.toFixed(str.length - index - 1);
    } else res = (METHODS_FOR_NUM[method] || METHODS_FOR_NUM[0])(value);

    return res;
  };
})();

exports.default = nearly;
exports.nearly = nearly;
