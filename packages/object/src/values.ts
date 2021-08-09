import { Object as __Object__ } from './Object'
import { keys } from './keys'

export const values =
  __Object__.values ||
  (((object: any) =>
    keys(object).map((k) => object[k])) as typeof Object.values)
export default values
