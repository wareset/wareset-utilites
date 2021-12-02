export const isVoid = (v: any): v is null | undefined /* | typeof NaN */ =>
  v == null || v !== v
export default isVoid
