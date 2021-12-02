export const typeofFactory = <T>(s: string) => (thing: any): thing is T =>
  typeof thing === s
export default typeofFactory
