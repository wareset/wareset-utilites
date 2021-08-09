import { isFunction } from '@wareset-utilites/is/isFunction';

var trycatch = (r, e, c) => {
  var o;

  try {
    o = r();
  } catch (i) {
    c && console.error(i), o = isFunction(e) ? e(i) : e;
  }

  return o;
};

export default trycatch;
export { trycatch };
