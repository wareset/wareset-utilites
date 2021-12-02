export const isObject = (thing: any): thing is object =>
  thing != null && typeof thing === 'object'
export default isObject
