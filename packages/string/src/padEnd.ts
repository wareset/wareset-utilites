import { $SPACE } from './lib'
import { repeat } from './repeat'

export const padEnd = (string: string, len: number, pad?: string): string =>
  !((len = (len || 0) - string.length) > 0)
    ? string
    : string + repeat((pad = pad || $SPACE), len / pad.length + 1).slice(0, len)
export default padEnd
