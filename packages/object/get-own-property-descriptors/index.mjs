import { getOwnPropertyDescriptor } from '../get-own-property-descriptor';
import { getOwnPropertyNames } from '../get-own-property-names';

var getOwnPropertyDescriptors = // Object.getOwnPropertyDescriptors ||
o => {
  var res = {};
  getOwnPropertyNames(o).forEach(k => res[k] = getOwnPropertyDescriptor(o, k));
  return res;
};

export { getOwnPropertyDescriptors };
