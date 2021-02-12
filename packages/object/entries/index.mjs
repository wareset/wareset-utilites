import { keys } from '../keys';

var entries = value => keys(value).map(k => [k, value[k]]);

export { entries };
