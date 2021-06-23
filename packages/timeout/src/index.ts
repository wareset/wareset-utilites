export const timeout = <T>(
  msec = 1,
  callback: () => T | Promise<T> = (): any => {}
): Promise<T> => new Promise((res) => setTimeout(() => res(callback()), msec))

export default timeout
