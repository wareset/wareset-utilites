import { isObject } from '@wareset-utilites/is/isObject';
import { keys } from '@wareset-utilites/object/keys';
import { typedOf } from '@wareset-utilites/typed';
import { Array } from '@wareset-utilites/array/Array';

var each = (s, i) => {
  if (isObject(s)) if (typedOf(s, Array, Set)) {
    var t = 0;

    for (var e of s) {
      i(e, t, s, 'set'), t++;
    }
  } else if (typedOf(s, Map)) for (var [_t, _e] of s) {
    i(_e, _t, s, 'map');
  } else for (var _t2 of keys(s)) {
    i(s[_t2], _t2, s, 'object');
  }
  return s;
};

export default each;
export { each };
