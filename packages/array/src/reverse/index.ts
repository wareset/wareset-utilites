export const reverse = (list: any[], clone?: boolean): any[] =>
  clone ? reverse([...list]) : list.reverse()
