import { repeat } from '../repeat';
import { slice } from '@wareset-utilites/lang/slice';
import { length } from '@wareset-utilites/lang/length';
import { __space__ } from '../lib';

var padEnd = (string, len = 0, pad = __space__) => !((len -= length(string)) > 0) ? string : string + slice(repeat(pad, len / length(pad) + 1), 0, len);

export { padEnd };
