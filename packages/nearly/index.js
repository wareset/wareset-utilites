'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var isArray = require('@wareset-utilites/is/isArray');

var isNumber = require('@wareset-utilites/is/isNumber');

var math = require('@wareset-utilites/math');

var nearly = (() => {
  var o = {
    '-1': math.floor,
    0: math.round,
    1: math.ceil
  },
      n = {
    '-1': (e = 0, t = 0, i = 0) => math.abs(e - i) <= math.abs(t - i),
    0: (e = 0, t = 0, i = 0) => math.abs(e - i) < math.abs(t - i),
    1: null
  };
  return (i = 1, s, l = 0) => {
    var u;
    if (isArray.isArray(s)) {
      if (s.length) {
        var e = n[l] || n[0];
        u = s.reduce((t, r) => e(t, r, i) ? t : r);
      } else u = i;
    } else if (s && isNumber.isNumber(s)) {
      s = math.abs(s);

      var _e = math.abs(i % s);

      var t = i - _e;
      t = +l > 0 || !l && _e > s / 2 ? t + s : t;

      var _o = `${s}`,
          _n = _o.indexOf('.');

      u = -1 === _n ? t : +t.toFixed(_o.length - _n - 1);
    } else u = (o[l] || o[0])(i);
    return u;
  };
})();

exports.default = nearly;
exports.nearly = nearly;
