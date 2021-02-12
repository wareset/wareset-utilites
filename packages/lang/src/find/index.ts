let undef: undefined
export const find = <T>(
  list: T[],
  cb: (value: T, key: number, list: T[]) => boolean | any,
  _?: T
): T | undefined => (list.some((v, k, a) => cb((_ = v), k, a)) ? _ : undef)
