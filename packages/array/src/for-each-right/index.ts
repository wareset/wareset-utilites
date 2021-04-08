import { length } from '@wareset-utilites/lang'

export const forEachRight = <T>(
  list: T[],
  callback: (value: T, index: number, array: T[]) => void
): void => {
  let i = length(list)
  while (i-- > 0) callback(list[i], i, list)
}
