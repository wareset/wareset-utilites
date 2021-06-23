import { $SPACE } from './lib'
import repeat from './repeat'

export const padStart = (string: string, len: number, pad?: string): string =>
  !((len = (len || 0) - string.length) > 0)
    ? string
    : repeat((pad = pad || $SPACE), len / pad.length + 1).slice(0, len) + string
export default padStart
