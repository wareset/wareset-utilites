export const hash = (str: string | number, salt?: string): string => {
  str = ((salt || '') + str).replace(/\r/g, '')
  let h = 0
  for (let i = str.length; i--;) h = (256 * h + str.charCodeAt(i)) % 2147483642 // 0x7ffffffa
  return (-h >>> 0).toString(36)
}

export default hash
