import { Object as __Object__ } from './Object'

export const getOwnPropertySymbols =
  __Object__.getOwnPropertySymbols ||
  ((() => []) as typeof Object.getOwnPropertySymbols)
export default getOwnPropertySymbols
