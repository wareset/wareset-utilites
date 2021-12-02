export const isNotEqual = (a: any, b: any): boolean =>
  a === a ? a !== b : b === b
export default isNotEqual
