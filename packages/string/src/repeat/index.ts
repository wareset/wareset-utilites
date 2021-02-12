export const repeat = (string: string, count = 1): string => {
  let res = ''
  count = -~count || 0
  while (--count > 0) res += string
  return res
}
