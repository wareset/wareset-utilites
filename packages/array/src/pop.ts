export const pop = <T>(list: T[], offset?: number): T | undefined =>
  list.splice(-(offset || 0) - 1, 1)[0]
export default pop
