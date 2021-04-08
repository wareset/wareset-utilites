import { keys } from '../keys';

var values = object => keys(object).map(k => object[k]);

export { values };
