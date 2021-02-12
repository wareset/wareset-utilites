import { length } from '../length';

var size = (v, _) => (_ = v.size) == null ? length(v) : _;

export { size };
