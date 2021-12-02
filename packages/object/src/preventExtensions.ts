import { Object as __Object__ } from './Object'

export const preventExtensions =
  __Object__.preventExtensions ||
  ((a: any): any => a as typeof Object.preventExtensions)
export default preventExtensions
