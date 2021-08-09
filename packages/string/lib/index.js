'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _RegExp = require('@wareset-utilites/lang/RegExp');

var $EMPTY = '';
var $DASH = '-';
var $SPACE = ' ';
var $UNDERSCORE = '_';
var __trimer__ = '\\s';

var __regexp__ = e => new _RegExp.RegExp(e, 'g');

var e = $EMPTY.toLocaleLowerCase || $EMPTY.toLowerCase;

var toLowercase = t => e.call(t);

var o = $EMPTY.toLocaleUpperCase || $EMPTY.toUpperCase;

var toUppercase = t => o.call(t);

var r = /[\d$]/;

var __toArrayCase__ = t => {
  var o = (t += $DASH).length;

  var s,
      p,
      c,
      n,
      a = -1,
      $ = $EMPTY,
      l = [],
      _ = !s;

  for (; ++a < o;) {
    p = t.charAt(a), x = p, n = e.call(x), c = toUppercase(p), c !== n || r.test(p) ? (_ || !s != (p === c) ? ($ && ($.length > 1 && ($ += $DASH), l.push($)), $ = n) : $ += n, s = _ || s || p !== c, _ = !1) : ($ && ($.length > 1 && ($ = $DASH + $ + $DASH), l.push($), $ = $DASH), _ = !0);
  }

  var x;
  return l = l.join($EMPTY).split($DASH).filter(t => !!t), l;
};

exports.$DASH = $DASH;
exports.$EMPTY = $EMPTY;
exports.$SPACE = $SPACE;
exports.$UNDERSCORE = $UNDERSCORE;
exports.__regexp__ = __regexp__;
exports.__toArrayCase__ = __toArrayCase__;
exports.__trimer__ = __trimer__;
exports.toLowercase = toLowercase;
exports.toUppercase = toUppercase;
