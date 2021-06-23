export const startsWith = (
  string: string,
  search: string,
  offset?: number
): boolean =>
  (search += '') ===
  (string += '').slice((offset = +offset! || 0), offset + search.length)

export default startsWith
