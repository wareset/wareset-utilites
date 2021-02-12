export const timeout = <T>(
  msec = 0,
  callback: () => T = (): any => {}
): Promise<T> => new Promise((res) => setTimeout(() => res(callback()), msec))

export default timeout
