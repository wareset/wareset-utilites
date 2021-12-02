import { last } from '@wareset-utilites/array/last'

import { isArray } from '@wareset-utilites/is/isArray'
import { isPromise } from '@wareset-utilites/is/isPromise'
import { isFunction } from '@wareset-utilites/is/isFunction'

import { Promise } from '@wareset-utilites/lang/Promise'

export default class Queuer {
  list: (Function | Function[])[] = []
  is = false
  
  constructor(private res?: any) {}
  
  run(): void {
    if (!this.is && this.list.length) {
      this.is = true
      const arr: any = this.list.shift()
      const tmp = (isArray(arr) ? [...arr] : [arr]).map((v) =>
        isFunction(v) ? v(this.res) : v)

      const fin = (tmp: any): void => {
        this.res = last(tmp), this.is = false, this.run()
      }

      tmp.some(isPromise) ? Promise.all(tmp).then(fin) : fin(tmp)
    }
  }

  add(...callbacks: (Function | Function[])[]): this {
    this.list.unshift(...callbacks), this.run()
    return this
  }
}

type TypeQueuer = {} & Queuer
type TypeQueuerClass = new (value?: any) => Queuer
export { Queuer, TypeQueuer, TypeQueuerClass }
