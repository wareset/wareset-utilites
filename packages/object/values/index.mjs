import __Object__ from '../Object';
import keys from '../keys';

var values = __Object__.values || (object => keys(object).map(k => object[k]));

export default values;
export { values };
