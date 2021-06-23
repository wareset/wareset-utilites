import randomTo from '@wareset-utilites/math/randomTo'

export const shuffle = <T>(list: T[], clone?: boolean): T[] => {
  if (clone) list = list.slice(0)
  let i = list.length
  let j: number, temp: T
  while (i--) {
    temp = list[(j = randomTo(0, i, false))]
    ;(list[j] = list[i]), (list[i] = temp)
  }
  return list
}
export default shuffle
