export declare const trycatch: <T>(tryFn: () => T, catchFn?: T | ((error: Error) => T), errorMsg?: boolean) => T;
export default trycatch;
