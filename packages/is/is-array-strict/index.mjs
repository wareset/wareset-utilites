import { isArray } from '../is-array';
import { typed } from '@wareset-utilites/typed';
import { array } from '@wareset-utilites/array/array';

var isArrayStrict = v => isArray(v) && typed(v, array);

export { isArrayStrict };
