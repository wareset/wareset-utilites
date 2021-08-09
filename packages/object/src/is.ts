import { Object as __Object__ } from './Object'

export const is =
  __Object__.is ||
  (((x: any, y: any): boolean =>
    x === y
      ? x !== 0 || 1 / x === 1 / y
      : x !== x && y !== y) as typeof Object.is)
export default is
