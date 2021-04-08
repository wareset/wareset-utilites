export const filter = <T>(
  list: T[],
  callback: (value: T, index: number, array: T[]) => boolean
): T[] => list.filter(callback)
