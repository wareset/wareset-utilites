export const instanceofFactory = <T>(ctor: new (...a: any[]) => T) => (
  thing: any
): thing is T => thing instanceof ctor
export default instanceofFactory
