import { splice } from '../splice';
import { length } from '../length';

var pop = (list, offset) => offset ? splice(list, length(list) - offset, 1)[0] : list.pop();

export { pop };
