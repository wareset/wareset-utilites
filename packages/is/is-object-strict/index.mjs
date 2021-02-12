import { isObject } from '../is-object';
import { typed } from '@wareset-utilites/typed';

var isObjectStrict = value => isObject(value) && typed(value, Object, null);

export { isObjectStrict };
