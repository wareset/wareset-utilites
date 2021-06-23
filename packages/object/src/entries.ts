import __Object__ from './Object'
import keys from './keys'

export const entries =
  __Object__.entries ||
  (((object: any) =>
    keys(object).map((k) => [k, object[k]])) as typeof Object.entries)
export default entries
