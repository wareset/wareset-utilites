export const concat = <T>(...lists: (T | T[])[]): T[] =>
  [].concat(...(lists as any))
export default concat
