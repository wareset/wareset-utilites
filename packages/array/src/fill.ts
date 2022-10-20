const { max, min } = Math

export const fill = <T>(
  list: T[],
  value: T,
  start?: number,
  end?: number
): T[] => {
  const len = list.length
  start = +start! || 0
  end = +end! || len
  let k = start < 0 ? max(len + start, 0) : min(start, len)
  const final = end < 0 ? max(len + end, 0) : min(end, len)
  while (k < final) list[k++] = value
  return list
}
export default fill
