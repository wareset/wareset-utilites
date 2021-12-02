import { Object as __Object__ } from './Object'

export const isExtensible =
  __Object__.isExtensible || (((): any => {}) as typeof Object.isExtensible)
export default isExtensible
