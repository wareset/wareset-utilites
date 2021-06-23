import min from '@wareset-utilites/math/min'
import max from '@wareset-utilites/math/max'

import { UNDEFINED } from './lib'

export const fill = <T>(
  list: T[],
  value: T,
  start?: number,
  end?: number
): T[] => {
  start = +start! || 0
  const len = list.length
  if (end === UNDEFINED) end = len
  let k = start < 0 ? max(len + start, 0) : min(start, len)
  const final = end < 0 ? max(len + end, 0) : min(end, len)
  while (k < final) list[k++] = value
  return list
}
export default fill
