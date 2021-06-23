import isFunction from '@wareset-utilites/is/isFunction';

var trycatch = (tryFn, catchFn, errorMsg) => {
  var res;

  try {
    res = tryFn();
  } catch (e) {
    if (errorMsg) console.error(e);
    res = isFunction(catchFn) ? trycatch(() => catchFn(e), null, errorMsg) : catchFn;
  }

  return res;
};

export default trycatch;
export { trycatch };
