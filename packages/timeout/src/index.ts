export const timeout: {
  (msec?: number): undefined
  <T>(msec: number, callback: (...a: any[]) => Promise<T> | T): Promise<T>
} = (msec?: number, callback?: Function): any =>
  new Promise((res) => setTimeout(() => res(callback && callback()), msec || 0))

export default timeout
