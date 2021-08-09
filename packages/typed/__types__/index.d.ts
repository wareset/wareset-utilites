declare type IPrototype = Function | object | null | undefined;
declare type IPrototypesList = IPrototype[];
declare const typedOf: {
    (value: any): IPrototypesList;
    (value: any, ...types: IPrototypesList): boolean;
    try: <T>(value: T, ...t: any[]) => T | never;
};
declare const typed: {
    (value: any): IPrototype;
    (value: any, ...types: IPrototypesList): boolean;
    try: <T>(value: T, ...t: any[]) => T | never;
    of: {
        (value: any): IPrototypesList;
        (value: any, ...types: IPrototypesList): boolean;
        try: <T>(value: T, ...t: any[]) => T | never;
    };
};
export { typed, typedOf };
export default typed;
