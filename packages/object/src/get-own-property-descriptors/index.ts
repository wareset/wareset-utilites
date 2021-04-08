import { getOwnPropertyDescriptor } from '../get-own-property-descriptor'
import { getOwnPropertyNames } from '../get-own-property-names'

export const getOwnPropertyDescriptors =
  // Object.getOwnPropertyDescriptors ||
  <T>(
    o: T
  ): { [P in keyof T]: TypedPropertyDescriptor<T[P]> } & {
    [x: string]: PropertyDescriptor
  } => {
    const res: any = {}
    getOwnPropertyNames(o).forEach(
      (k) => (res[k] = getOwnPropertyDescriptor(o, k))
    )
    return res
  }
