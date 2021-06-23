export const hash = (str: any, salt?: string): string => {
  str = ((salt || '') + str).replace(/\r/g, '')
  let h = 0
  let i = str.length
  while (i--) h = (256 * h + str.charCodeAt(i)) % 2147483647
  return (-h >>> 0).toString(36)
}

export default hash
