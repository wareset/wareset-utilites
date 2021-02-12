import { isFunction } from '@wareset-utilites/is/is-function'

export const trycatch = <T>(
  tryFn: () => T,
  catchFn?: T | ((error: Error) => T),
  errorMsg = true
): T => {
  let res
  try {
    res = tryFn()
  } catch (e) {
    if (errorMsg) console.error(e)
    res = isFunction(catchFn)
      ? trycatch(() => (catchFn as Function)(e))
      : catchFn
  }
  return res
}

export default trycatch
