import { Object as Object$1 } from '../Object';
import { keys } from '../keys';

var values = Object$1.values || (e => keys(e).map(t => e[t]));

export default values;
export { values };
