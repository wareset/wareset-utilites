const { floor, random } = Math

export const sample = <T>(list: ArrayLike<T>): T =>
  list[floor(random() * list.length)]
export default sample
