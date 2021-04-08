/* eslint-disable max-len */

import { isObject } from '@wareset-utilites/is/is-object'
import { keys } from '@wareset-utilites/object/keys'
import { typed } from '@wareset-utilites/typed'
import { array } from '@wareset-utilites/array/array'

export const eachAsync = async <T, K extends keyof T>(
  object: T,
  callback: (v: T[K], k: K, a: T, type: string) => any
): Promise<T> => {
  if (isObject(object)) {
    if (typed.of(object, array, Set)) {
      let k = 0
      for await (const v of object as any)
        await callback(v, k as any, object, 'set'), k++
    } else if (typed.of(object, Map)) {
      for await (const [k, v] of object as any)
        await callback(v, k, object, 'map')
    } else {
      for await (const k of keys(object))
        await callback((object as any)[k], k as any, object, 'object')
    }
  }
  return object
}
