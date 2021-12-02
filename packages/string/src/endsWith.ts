export const endsWith = (
  string: string,
  search: string,
  offset?: number
): boolean =>
  search ===
  string.slice(
    offset = string.length - search.length - (+offset! || 0),
    offset + search.length
  )
export default endsWith
