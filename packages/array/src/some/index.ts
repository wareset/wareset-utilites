export const some = <T>(
  list: T[],
  callback: (value: T, index: number, array: T[]) => boolean
): boolean => list.some(callback)
