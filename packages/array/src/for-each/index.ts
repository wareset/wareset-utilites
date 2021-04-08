export const forEach = <T>(
  list: T[],
  callback: (value: T, index: number, array: T[]) => void
): void => list.forEach(callback)
