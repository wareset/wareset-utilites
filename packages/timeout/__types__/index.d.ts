export declare const timeout: {
    (msec?: number): undefined;
    <T>(msec: number, callback: (...a: any[]) => Promise<T> | T): Promise<T>;
};
export default timeout;
