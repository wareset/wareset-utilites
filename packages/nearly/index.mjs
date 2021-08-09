import { isArray } from '@wareset-utilites/is/isArray';
import { isNumber } from '@wareset-utilites/is/isNumber';
import { abs, floor, round, ceil } from '@wareset-utilites/math';

var nearly = (() => {
  var o = {
    '-1': floor,
    0: round,
    1: ceil
  },
      n = {
    '-1': (e = 0, t = 0, i = 0) => abs(e - i) <= abs(t - i),
    0: (e = 0, t = 0, i = 0) => abs(e - i) < abs(t - i),
    1: null
  };
  return (i = 1, s, l = 0) => {
    var u;
    if (isArray(s)) {
      if (s.length) {
        var e = n[l] || n[0];
        u = s.reduce((t, r) => e(t, r, i) ? t : r);
      } else u = i;
    } else if (s && isNumber(s)) {
      s = abs(s);

      var _e = abs(i % s);

      var t = i - _e;
      t = +l > 0 || !l && _e > s / 2 ? t + s : t;

      var _o = `${s}`,
          _n = _o.indexOf('.');

      u = -1 === _n ? t : +t.toFixed(_o.length - _n - 1);
    } else u = (o[l] || o[0])(i);
    return u;
  };
})();

export default nearly;
export { nearly };
