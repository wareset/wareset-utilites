export const shift = <T>(list: T[], offset?: number): T | undefined =>
  list.splice(offset || 0, 1)[0]
export default shift
