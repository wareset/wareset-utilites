import { isArray } from '../is-array';
import { typed } from '@wareset-utilites/typed';

var isArrayStrict = value => isArray(value) && typed(value, Array);

export { isArrayStrict };
