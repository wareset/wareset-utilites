export const findIndex = <T>(
  list: T[],
  callback: (value: T, key: number, list: T[]) => boolean | any,
  _?: number
): number => (list.some((v, k, a) => callback(v, (_ = k), a)) ? _ : -1)!
