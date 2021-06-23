import { $EMPTY } from './lib'

export const repeat = (string: string, count?: number): string => {
  let res = $EMPTY
  count = -~count! || 0
  while (--count > 0) res += string
  return res
}
export default repeat
