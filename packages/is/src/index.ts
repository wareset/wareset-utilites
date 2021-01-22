import { typeOf, instanceOf } from '@wareset-utilites/lang'
import { typed } from '@wareset-utilites/typed'

// export const isSame = (valueA: any, valueB: any): boolean => valueA === valueB

export const isTrue = (value: any): boolean => value === true
export const isFalse = (value: any): boolean => value === false

export const isNull = (value: any): boolean => value === null
export const isUndefined = (value: any): boolean => value === undefined

export const isNill = (value: any): boolean => value == null
export const isVoid = (value: any): boolean => isNaN(value) || isNill(value)
export const isBe = (value: any): boolean => !isVoid(value)

export const isArray = Array.isArray
export const isObject = (value: any): boolean =>
  value && typeOf(value, 'object')
export const isNumber = (value: any): boolean => typeOf(value, 'number')
export const isString = (value: any): boolean => typeOf(value, 'string')
export const isSymbol = (value: any): boolean => typeOf(value, 'symbol')
export const isBoolean = (value: any): boolean => typeOf(value, 'boolean')
export const isFunction = (value: any): boolean => typeOf(value, 'function')

export const isRegExp = (value: any): boolean => instanceOf(value, RegExp)
export const isPromise = (value: any): boolean => instanceOf(value, Promise)

export const isArrayStrict = (value: any): boolean =>
  value && typed(value, Array)
export const isObjectStrict = (value: any): boolean =>
  value && typed(value, Object, null)

export const isNativeFunction = (value: any): boolean =>
  isFunction(value) && /\{\s*\[native code\]\s*\}\s*$/.test(value)
