import { Object as Object$1 } from '../Object';
import { keys } from '../keys';

var entries = Object$1.entries || (e => keys(e).map(t => [t, e[t]]));

export default entries;
export { entries };
