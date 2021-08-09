import { randomTo } from '@wareset-utilites/math/randomTo'

export const sample = <T>(list: ArrayLike<T>): T =>
  list[randomTo(0, list.length, false)]
export default sample
