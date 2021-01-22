/* eslint-disable max-len */

import { isObject } from '@wareset-utilites/is'
import { keys } from '@wareset-utilites/object'
import { typed } from '@wareset-utilites/typed'

export const each = (object: any, callback: Function): any => {
  if (isObject(object)) {
    if (typed.of(object, Array, Set)) {
      let k = 0
      for (const v of object) callback(v, k, object, 'set'), k++
    } else if (typed.of(object, Map)) {
      for (const [k, v] of object) callback(v, k, object, 'map')
    } else {
      for (const k of keys(object)) callback(object[k], k, object, 'object')
    }
  }
  return object
}

export const eachAsync = async (
  object: any,
  callback: Function
): Promise<any> => {
  if (isObject(object)) {
    if (typed.of(object, Array, Set)) {
      let k = 0
      for await (const v of object) await callback(v, k, object, 'set'), k++
    } else if (typed.of(object, Map)) {
      for await (const [k, v] of object) await callback(v, k, object, 'map')
    } else {
      for await (const k of keys(object))
        await callback(object[k], k, object, 'object')
    }
  }
  return object
}

each.async = eachAsync

export default each
