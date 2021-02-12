import { isFunction } from '@wareset-utilites/is/is-function';

var trycatch = (tryFn, catchFn, errorMsg = true) => {
  var res;

  try {
    res = tryFn();
  } catch (e) {
    if (errorMsg) console.error(e);
    res = isFunction(catchFn) ? trycatch(() => catchFn(e)) : catchFn;
  }

  return res;
};

export default trycatch;
export { trycatch };
