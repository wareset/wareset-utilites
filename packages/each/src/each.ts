/* eslint-disable max-len */

import { isObject } from '@wareset-utilites/is/isObject'
import { keys } from '@wareset-utilites/object/keys'
import { typedOf } from '@wareset-utilites/typed'
import { Array as __Array__ } from '@wareset-utilites/array/Array'

export const each = <T, K extends keyof T>(
  object: T,
  callback: (v: T[K], k: K, a: T, type: 'set' | 'map' | 'object') => any
): T => {
  if (isObject(object)) {
    if (typedOf(object, __Array__, Set)) {
      let k = 0
      for (const v of object as any) callback(v, k as any, object, 'set'), k++
    } else if (typedOf(object, Map)) {
      for (const [k, v] of object as any) callback(v, k, object, 'map')
    } else {
      for (const k of keys(object))
        callback((object as any)[k], k as any, object, 'object')
    }
  }
  return object
}
export default each
