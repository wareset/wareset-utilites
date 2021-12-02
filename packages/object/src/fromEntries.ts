import { Object as __Object__ } from './Object'

export const fromEntries =
  __Object__.fromEntries ||
  (((entries: any) => [...entries].reduce(
    (o, [k, v]) => (o[k] = v, o), {}
  )) as typeof Object.fromEntries)
export default fromEntries
