export declare type TypeDeepEqualOptions = {
    depth?: number | boolean;
    symbols?: boolean;
    immerse?: boolean;
    noweaks?: boolean;
    natives?: boolean;
};
export declare const deepEqual: {
    (a: any, b: any, depth?: boolean | number): boolean;
    extended: (a: any, b: any, options?: {
        depth?: number | boolean;
        symbols?: boolean;
        immerse?: boolean;
        noweaks?: boolean;
        natives?: boolean;
    }) => boolean;
};
export declare const deepEqualExtended: (a: any, b: any, options?: {
    depth?: number | boolean;
    symbols?: boolean;
    immerse?: boolean;
    noweaks?: boolean;
    natives?: boolean;
}) => boolean;
export default deepEqual;
