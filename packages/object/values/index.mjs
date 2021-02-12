import { keys } from '../keys';

var values = value => keys(value).map(k => value[k]);

export { values };
