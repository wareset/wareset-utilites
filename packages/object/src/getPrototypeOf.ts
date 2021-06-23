import __Object__ from './Object'

export const getPrototypeOf =
  __Object__.getPrototypeOf ||
  (((v: any) => v.__proto__) as typeof Object.getPrototypeOf)
export default getPrototypeOf
