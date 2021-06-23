export default class Queuer {
    private res?;
    list: (Function | Function[])[];
    is: boolean;
    constructor(res?: any);
    run(): void;
    add(...callbacks: (Function | Function[])[]): this;
}
declare type TypeQueuer = {} & Queuer;
declare type TypeQueuerClass = new (value?: any) => Queuer;
export { Queuer, TypeQueuer, TypeQueuerClass };
