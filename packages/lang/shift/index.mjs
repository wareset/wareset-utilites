import { splice } from '../splice';

var shift = (list, offset) => offset ? splice(list, offset, 1)[0] : list.shift();

export { shift };
