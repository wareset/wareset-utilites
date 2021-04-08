import { object } from '../object'
import { keys } from '../keys'
import { defineProperty } from '../define-property'

export const defineProperties =
  object.defineProperties ||
  ((o: any, props: any): any =>
    keys(props).map((key) => defineProperty(o, key, props[key])))
