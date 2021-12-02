export const isEqual = (a: any, b: any): boolean =>
  a === a ? a === b : b !== b
export default isEqual
