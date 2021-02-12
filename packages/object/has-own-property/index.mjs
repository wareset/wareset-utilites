import { object } from '../object';

var hasOwnProperty = (o, k) => object.prototype.hasOwnProperty.call(o, k);

export { hasOwnProperty };
