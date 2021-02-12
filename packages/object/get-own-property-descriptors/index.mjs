import { getOwnPropertyDescriptor } from '../get-own-property-descriptor';
import { getOwnPropertyNames } from '../get-own-property-names';

var getOwnPropertyDescriptors = // Object.getOwnPropertyDescriptors ||
object => {
  var res = {};
  getOwnPropertyNames(object).forEach(k => res[k] = getOwnPropertyDescriptor(object, k));
  return res;
};

export { getOwnPropertyDescriptors };
