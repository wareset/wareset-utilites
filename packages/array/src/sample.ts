import { floor } from '@wareset-utilites/math/floor'
import { random } from '@wareset-utilites/math/random'

export const sample = <T>(list: ArrayLike<T>): T =>
  list[floor(random() * list.length)]
export default sample
