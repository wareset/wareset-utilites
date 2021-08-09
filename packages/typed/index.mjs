import { getPrototypeOf } from '@wareset-utilites/object/getPrototypeOf';
import { typeOf } from '@wareset-utilites/lang/typeOf';

var r = 'constructor',
    e = 'prototype',
    s = 'length',
    n = 'some',
    p = o => null == o ? o : getPrototypeOf(o),
    f = t => t && t[r] && t[r][e] === t ? t[r] : t,
    u = t => f(p(t)),
    i = typeOf(p),
    l = (t, r) => t === r || t === u(r) && (!r[e] || !typeOf(r, i)),
    c = t => (o, ...r) => {
  if (r[s] && !t(o, ...r)) throw o;
  return o;
},
    m = (t, ...o) => (t = (t => {
  var o = [];

  for (; (t = p(t)) || !o[s];) {
    o.push(f(t));
  }

  return o;
})(t), o[s] ? t[n](t => o[n](o => l(t, o))) : t);

m.try = c(m);

var y = (t, ...o) => (t = u(t), o[s] ? o[n](o => l(t, o)) : t);

y.try = c(y), y.of = m;
export default y;
export { y as typed, m as typedOf };
