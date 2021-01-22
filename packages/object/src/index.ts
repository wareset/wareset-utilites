/* eslint-disable max-len */

export const keys = Object.keys
export const values = (value: any): any[] => keys(value).map((k) => value[k])
export const entries = (value: any): Array<any[]> =>
  keys(value).map((k) => [k, value[k]])

export const defineProperty = Object.defineProperty
export const defineProperties = Object.defineProperties
export const hasOwnProperty = (o: any, k: string): boolean =>
  Object.prototype.hasOwnProperty.call(o, k)
export const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
export const getOwnPropertyNames = Object.getOwnPropertyNames

export const getOwnPropertyDescriptors =
  // Object.getOwnPropertyDescriptors ||
  (object: any): any => {
    const res: any = {}
    getOwnPropertyNames(object).forEach(
      (k) => (res[k] = getOwnPropertyDescriptor(object, k))
    )
    return res
  }

// export const setOwnProp = (object, ...args) => {
//   const define = (...args) => {
//     if (len(args)) {
//       let [key, props, writable = true, enumerable = false] = args
//       if (
//         !isObjStrict(props) ||
//         !('get' in props || 'set' in props || 'value' in props)
//       ) {
//         props = { value: props }
//       }
//       props = {
//         enumerable: !!enumerable,
//         configurable: true,
//         writable: !!writable,
//         ...props
//       }
//       if (props.get || props.set) delete props.writable
//       // else if (!isUndef(writable)) props.writable = !!writable
//       Object.defineProperty(object, key, props)
//     }
//     return define
//   }
//   return define(...args)
// }

// export const setOwnProps = (object, props = undefined) => {
//   const define = setOwnProp(object)
//   const defines = (props) => {
//     if (props) each(props, (v, k) => define(k, v))
//     return defines
//   }
//   return defines(props)
// }
