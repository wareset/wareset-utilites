import { Object as __Object__ } from './Object'

// export const keys = __Object__.keys // as <T>(object: T) => (keyof typeof object)[]
// export default keys

export const keys: {
  (object: ArrayLike<any>): string[]
  <K extends string>(object: Record<K, any>): K[]
} = __Object__.keys
export default keys
