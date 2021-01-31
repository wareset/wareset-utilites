export * from '@wareset-utilites/lang'

export { typed, typedOf } from '@wareset-utilites/typed'

export * from '@wareset-utilites/is'
// "dependencies": {
//   "@wareset-utilites/lang": "0.0.1",
//   "@wareset-utilites/typed": "0.3.0"
// }
export * from '@wareset-utilites/object'
export { deepEqual, deepEqualExtended } from '@wareset-utilites/deep-equal'
// "dependencies": {
//   "@wareset-utilites/is": "0.0.1",
//   "@wareset-utilites/lang": "0.0.1",
//   "@wareset-utilites/object": "0.0.1",
//   "@wareset-utilites/typed": "0.3.0"
// }
export { each, eachAsync } from '@wareset-utilites/each'
// "dependencies": {
//   "@wareset-utilites/is": "0.0.1",
//   "@wareset-utilites/object": "0.0.1",
//   "@wareset-utilites/typed": "0.3.0"
// }
export { esc } from '@wareset-utilites/escape'
export { hash } from '@wareset-utilites/hash'
export { nearly } from '@wareset-utilites/nearly'

export { queuer, Queuer } from '@wareset-utilites/queuer'
export { regexp } from '@wareset-utilites/regexp'
// "dependencies": {
//   "@wareset-utilites/lang": "0.0.1"
// }
export { split } from '@wareset-utilites/split'
export { stacktrace } from '@wareset-utilites/stacktrace'
export * from '@wareset-utilites/string'
// "dependencies": {
//   "@wareset-utilites/is": "0.0.1"
// }
export { unique } from '@wareset-utilites/unique'

import { isFunction } from '@wareset-utilites/is'

export const timeout = (time = 250, callback = (): void => {}): Promise<any> =>
  new Promise((resolve) => setTimeout(() => resolve(callback()), time))

export const trycatch = (
  tryFn: Function,
  catchFn: any = null,
  errorMsg = true
): any => {
  let res
  try {
    res = tryFn()
  } catch (error) {
    if (errorMsg) console.error(error)
    res = isFunction(catchFn) ? trycatch(() => catchFn(error)) : catchFn
  }
  return res
}
