import { __empty__ } from '../lib'

export const repeat = (string: string, count = 1): string => {
  let res = __empty__
  count = -~count || 0
  while (--count > 0) res += string
  return res
}
