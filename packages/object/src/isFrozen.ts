import { Object as __Object__ } from './Object'

export const isFrozen =
  __Object__.isFrozen || (((): any => {}) as typeof Object.isFrozen)
export default isFrozen
