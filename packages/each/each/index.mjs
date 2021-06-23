import isObject from '@wareset-utilites/is/isObject';
import keys from '@wareset-utilites/object/keys';
import { typedOf } from '@wareset-utilites/typed';
import Array from '@wareset-utilites/array/Array';
/* eslint-disable max-len */

var each = (object, callback) => {
  if (isObject(object)) {
    if (typedOf(object, Array, Set)) {
      var k = 0;

      for (var v of object) {
        callback(v, k, object, 'set'), k++;
      }
    } else if (typedOf(object, Map)) {
      for (var [_k, _v] of object) {
        callback(_v, _k, object, 'map');
      }
    } else {
      for (var _k2 of keys(object)) {
        callback(object[_k2], _k2, object, 'object');
      }
    }
  }

  return object;
};

export default each;
export { each };
