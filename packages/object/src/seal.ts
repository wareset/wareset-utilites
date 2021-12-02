import { Object as __Object__ } from './Object'

export const seal =
  __Object__.seal || ((a: any): any => a as typeof Object.seal)
export default seal
