import { getOwnPropertyDescriptor } from '../get-own-property-descriptor'
import { getOwnPropertyNames } from '../get-own-property-names'

export const getOwnPropertyDescriptors =
  // Object.getOwnPropertyDescriptors ||
  (object: any): any => {
    const res: any = {}
    getOwnPropertyNames(object).forEach(
      (k) => (res[k] = getOwnPropertyDescriptor(object, k))
    )
    return res
  }
