import { isArray } from '@wareset-utilites/is/is-array';
import { isNumber } from '@wareset-utilites/is/is-number';
import { indexOf } from '@wareset-utilites/lang/index-of';
import { length } from '@wareset-utilites/lang/length';
import { abs, floor, round, ceil } from '@wareset-utilites/math'; // export interface INearly {
//   (value: number, pattern: number | number[], method?: -1 | 0 | 1): number
// }

var nearly = (() => {
  var METHODS_FOR_NUM = {
    '-1': floor,
    '0': round,
    '1': ceil
  };
  var METHODS_FOR_ARR = {
    '-1': (a = 0, b = 0, c = 0) => abs(a - c) <= abs(b - c),
    '0': (a = 0, b = 0, c = 0) => abs(a - c) < abs(b - c),
    '1': null
  };
  return (value = 1, pattern, method = 0) => {
    var res;

    if (isArray(pattern)) {
      if (!length(pattern)) res = value;else {
        var f = METHODS_FOR_ARR[method] || METHODS_FOR_ARR[0];
        res = pattern.reduce((prev, curr) => f(prev, curr, value) ? prev : curr);
      }
    } else if (pattern && isNumber(pattern)) {
      pattern = abs(pattern);
      var coef = abs(value % pattern);
      var fin = value - coef;
      fin = +method > 0 || !method && coef > pattern / 2 ? fin + pattern : fin;
      var str = `${pattern}`;
      var index = indexOf(str, '.');
      res = index === -1 ? fin : +fin.toFixed(length(str) - index - 1);
    } else res = (METHODS_FOR_NUM[method] || METHODS_FOR_NUM[0])(value);

    return res;
  };
})();

export default nearly;
export { nearly };
