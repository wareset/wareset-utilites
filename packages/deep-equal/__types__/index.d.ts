export interface IDeepEqualOptions {
    depth?: number | boolean;
    symbols?: boolean;
    immerse?: boolean;
    noweaks?: boolean;
    natives?: boolean;
}
export declare const deepEqual: {
    (a: any, b: any, depth?: boolean | number): boolean;
    extended: (a: any, b: any, options?: IDeepEqualOptions) => boolean;
};
export declare const deepEqualExtended: (a: any, b: any, options?: IDeepEqualOptions) => boolean;
export default deepEqual;
