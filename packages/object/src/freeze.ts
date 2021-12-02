import { Object as __Object__ } from './Object'

export const freeze =
  __Object__.freeze || ((a: any): any => a as typeof Object.freeze)
export default freeze
