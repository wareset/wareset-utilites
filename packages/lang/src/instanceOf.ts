export const instanceOf = (value: any, type: Function): value is typeof type =>
  value instanceof type
export default instanceOf
