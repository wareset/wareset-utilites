import { randomTo } from '@wareset-utilites/math/randomTo'

export const shuffle = <T>(list: T[], clone?: boolean): T[] => {
  if (clone) list = [...list]
  let j: number, temp: T
  for (let i = list.length; i-- > 0;) {
    temp = list[j = randomTo(0, i, false)]; list[j] = list[i]; list[i] = temp
  }
  return list
}
export default shuffle
