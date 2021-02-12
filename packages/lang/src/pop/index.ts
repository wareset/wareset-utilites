import { splice } from '../splice'
import { length } from '../length'

export const pop = <T>(list: T[], offset?: number): T | undefined =>
  offset ? splice(list, length(list) - offset, 1)[0] : list.pop()
