export const reverse = <T>(list: T[], clone?: boolean): T[] =>
  (clone ? [...list] : list).reverse()

export default reverse
