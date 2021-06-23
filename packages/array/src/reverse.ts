export const reverse = <T>(list: T[], clone?: boolean): T[] => {
  if (clone) list = list.slice(0)
  return list.reverse()
}
export default reverse
