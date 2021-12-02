export const trycatch = <T, B>(
  tryFn: () => T,
  catchFn?: ((error?: Error, ...a: any[]) => B) | B,
  errorMsg?: boolean
): T | B => {
  let res
  try {
    res = tryFn()
  } catch (e: any) {
    if (errorMsg) console.error(e)
    res = typeof catchFn === 'function' ? (catchFn as any)(e) : catchFn
  }
  return res as T | B
}

export default trycatch
