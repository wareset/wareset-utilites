export const splice = <T>(
  source: T[],
  idx1: number,
  idx2: number,
  ...a: T[]
): T[] => source.splice(idx1, idx2, ...a)
