import { repeat } from '../repeat'
import { slice } from '@wareset-utilites/lang/slice'
import { length } from '@wareset-utilites/lang/length'

import { __pad__ } from '../lib'

export const padEnd = (string: string, len = 0, pad = __pad__): string =>
  !((len -= length(string)) > 0)
    ? string
    : string + slice(repeat(pad, len / length(pad) + 1), 0, len)
