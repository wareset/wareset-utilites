export declare const trycatch: <T, B>(tryFn: () => T, catchFn?: B | ((error?: Error, ...a: any[]) => B), errorMsg?: boolean) => T | B;
export default trycatch;
