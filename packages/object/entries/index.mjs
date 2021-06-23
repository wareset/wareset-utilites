import __Object__ from '../Object';
import keys from '../keys';

var entries = __Object__.entries || (object => keys(object).map(k => [k, object[k]]));

export default entries;
export { entries };
