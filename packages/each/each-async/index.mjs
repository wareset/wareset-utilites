import { isObject } from '@wareset-utilites/is/is-object';
import { keys } from '@wareset-utilites/object/keys';
import { typed } from '@wareset-utilites/typed';
import { array } from '@wareset-utilites/array/array';
/* eslint-disable max-len */

var eachAsync = async (object, callback) => {
  if (isObject(object)) {
    if (typed.of(object, array, Set)) {
      var k = 0;

      for await (var v of object) {
        await callback(v, k, object, 'set'), k++;
      }
    } else if (typed.of(object, Map)) {
      for await (var [_k, _v] of object) {
        await callback(_v, _k, object, 'map');
      }
    } else {
      for await (var _k2 of keys(object)) {
        await callback(object[_k2], _k2, object, 'object');
      }
    }
  }

  return object;
};

export { eachAsync };
