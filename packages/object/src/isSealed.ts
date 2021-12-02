import { Object as __Object__ } from './Object'

export const isSealed =
  __Object__.isSealed || (((): any => {}) as typeof Object.isSealed)
export default isSealed
