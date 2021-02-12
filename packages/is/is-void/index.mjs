import { isNill } from '../is-nill';

var isVoid = value => value !== value || isNill(value);

export { isVoid };
