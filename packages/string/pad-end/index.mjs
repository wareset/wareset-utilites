import { repeat } from '../repeat';
import { slice } from '@wareset-utilites/lang/slice';
import { length } from '@wareset-utilites/lang/length';
import { __pad__ } from '../lib';

var padEnd = (string, len = 0, pad = __pad__) => !((len -= length(string)) > 0) ? string : string + slice(repeat(pad, len), 0, len);

export { padEnd };
