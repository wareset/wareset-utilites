import { isObject } from '@wareset-utilites/is/is-object';
import { keys } from '@wareset-utilites/object/keys';
import { typed } from '@wareset-utilites/typed';
/* eslint-disable max-len */

var each = (object, callback) => {
  if (isObject(object)) {
    if (typed.of(object, Array, Set)) {
      var k = 0;

      for (var v of object) {
        callback(v, k, object, 'set'), k++;
      }
    } else if (typed.of(object, Map)) {
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

export { each };
