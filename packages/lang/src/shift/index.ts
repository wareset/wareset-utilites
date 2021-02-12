import { splice } from '../splice'

export const shift = <T>(list: T[], offset?: number): T | undefined =>
  offset ? splice(list, offset, 1)[0] : list.shift()
