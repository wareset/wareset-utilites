import isFunction from '@wareset-utilites/is/isFunction'

export const trycatch = <T>(
  tryFn: () => T,
  catchFn?: T | ((error: Error) => T),
  errorMsg?: boolean
): T => {
  let res
  try {
    res = tryFn()
  } catch (e) {
    if (errorMsg) console.error(e)
    res = isFunction(catchFn)
      ? trycatch(() => (catchFn as Function)(e), null, errorMsg)
      : catchFn
  }
  return res
}

export default trycatch
