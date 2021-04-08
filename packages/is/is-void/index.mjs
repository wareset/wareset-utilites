import { isNill } from '../is-nill';

var isVoid = v => v !== v || isNill(v);

export { isVoid };
