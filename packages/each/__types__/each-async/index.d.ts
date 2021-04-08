export declare const eachAsync: <T, K extends keyof T>(object: T, callback: (v: T[K], k: K, a: T, type: string) => any) => Promise<T>;
