/* eslint-disable max-len */

import { isObject } from '@wareset-utilites/is/is-object'
import { keys } from '@wareset-utilites/object/keys'
import { typed } from '@wareset-utilites/typed'
import { array } from '@wareset-utilites/array/array'

export const each = <T, K extends keyof T>(
  object: T,
  callback: (v: T[K], k: K, a: T, type: string) => any
): T => {
  if (isObject(object)) {
    if (typed.of(object, array, Set)) {
      let k = 0
      for (const v of object as any) callback(v, k as any, object, 'set'), k++
    } else if (typed.of(object, Map)) {
      for (const [k, v] of object as any) callback(v, k, object, 'map')
    } else {
      for (const k of keys(object))
        callback((object as any)[k], k as any, object, 'object')
    }
  }
  return object
}
