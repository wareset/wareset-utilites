export const map = <T>(
  v: T[],
  cb: (value: T, index: number, array: T[]) => any
): any[] => v.map(cb)
