import { isFunction } from '@wareset-utilites/is/isFunction'

export const trycatch = <T, B>(
  tryFn: () => T,
  catchFn?: ((error?: Error, ...a: any[]) => B) | B,
  errorMsg?: boolean
): T | B => {
  let res
  try {
    res = tryFn()
  } catch (e) {
    if (errorMsg) console.error(e)
    res = isFunction(catchFn) ? catchFn(e) : catchFn
  }
  return res as T | B
}

export default trycatch
