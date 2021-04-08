import { keys } from '../keys';

var entries = object => keys(object).map(k => [k, object[k]]);

export { entries };
