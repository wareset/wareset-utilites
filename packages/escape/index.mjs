import { RegExp } from '@wareset-utilites/lang/RegExp';

var esc = (() => {
  var t = t => new RegExp(t, 'g'),
      r = '[',
      s = '-.\\\\+*?\\[\\^\\]$(){}=!<>|:\\/',
      c = ']',
      l = t(r + s + c),
      p = '\\$&';

  return (e, a, n) => {
    var o;

    if ((a = a || '') || n) {
      var _l = s.replace(t(r + esc(a) + c), ''),
          g = t(r + _l + c),
          i = e => e.replace(g, p);

      o = n ? i : i(e);
    } else o = e.replace(l, p);

    return o;
  };
})();

export default esc;
export { esc };
