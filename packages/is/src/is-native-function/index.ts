import { test } from '@wareset-utilites/lang/test'
import { isFunction } from '../is-function'

export const isNativeFunction = (value: any): boolean =>
  isFunction(value) && test(/\{\s*\[native code\]\s*\}\s*$/, value)
