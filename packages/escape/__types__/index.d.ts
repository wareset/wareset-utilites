export declare const esc: {
    (string: string, ignore?: string): string;
    (string: string, ignore: string, isNewFn: false): string;
    (string: string, ignore: string, isNewFn: true): (string: string) => string;
};
export default esc;
