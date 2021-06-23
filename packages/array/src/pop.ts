export const pop = <T>(list: T[], offset?: number): T | undefined =>
  !offset ? list.pop() : list.splice(list.length - 1 - (+offset || 0), 1)[0]
export default pop
