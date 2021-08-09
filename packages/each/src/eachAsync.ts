/* eslint-disable max-len */

import { isObject } from '@wareset-utilites/is/isObject'
import { keys } from '@wareset-utilites/object/keys'
import { typedOf } from '@wareset-utilites/typed'
import { Array as __Array__ } from '@wareset-utilites/array/Array'

export const eachAsync = async <T, K extends keyof T>(
  object: T,
  callback: (v: T[K], k: K, a: T, type: 'set' | 'map' | 'object') => any
): Promise<T> => {
  if (isObject(object)) {
    if (typedOf(object, __Array__, Set)) {
      let k = 0
      for await (const v of object as any)
        await callback(v, k as any, object, 'set'), k++
    } else if (typedOf(object, Map)) {
      for await (const [k, v] of object as any)
        await callback(v, k, object, 'map')
    } else {
      for await (const k of keys(object))
        await callback((object as any)[k], k as any, object, 'object')
    }
  }
  return object
}
export default eachAsync
