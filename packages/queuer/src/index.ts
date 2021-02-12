import { length } from '@wareset-utilites/lang/length'
import { splice } from '@wareset-utilites/lang/splice'
import { indexOf } from '@wareset-utilites/lang/index-of'

import { isArray } from '@wareset-utilites/is/is-array'
import { isFunction } from '@wareset-utilites/is/is-function'
import { isPromise } from '@wareset-utilites/is/is-promise'

type Callbacks = Array<any>

export const Queuer = (...args: Callbacks): Function | Promise<any> | void => {
  const queuerCycle = (queue: Callbacks, c: any): void => {
    let fn, res
    for (let i = 0; i < length(queue); i++) {
      fn = queue[i]
      if (!fn.isRun) {
        ;(fn.isRun = true), (res = fn(fn.isRes))
        if (isPromise(res)) {
          res.finally(() => queuerCycle(queue, c))
          return
        }
      }

      if (c.fn !== fn) splice(queue, i, 1), (i = i - 1)
      if (queue[i - 1] && c.fn !== queue[i - 1]) {
        splice(queue, i - 1, 1), (i = i - 1)
      }
    }

    queue.length = 0
    c.resolve(true)
  }

  const QUEUE: Callbacks = []
  const CURRENT: {
    fn: Function
    promise?: Promise<any>
    resolve?: any
  } = {
    fn: (): any => {}
  }

  const queuer = (...args: Callbacks): Function | Promise<any> | void => {
    let data: any, callbacks
    if (length(args) === 1) (data = undefined), (callbacks = args[0])
    else [data, callbacks] = args

    if (isArray(callbacks) && length(callbacks)) {
      const run = !length(QUEUE)

      const queue: Callbacks = []
      ;[(): any => data, ...callbacks].forEach((_fn, k) => {
        const fn = !isFunction(_fn) ? (): Function => _fn : _fn
        const FN = (data: any): any => {
          CURRENT.fn = FN
          const res = fn(data)
          if (queue[k + 1]) {
            if (!isPromise(res)) {
              if (queue[k + 1]) queue[k + 1].isRes = res
            } else {
              res.then((res: any) => queue[k + 1] && (queue[k + 1].isRes = res))
            }
          }
          return res
        }
        queue.push(FN)
      })
      ;(queue[0].isRun = true), (queue[1].isRes = data)
      splice(QUEUE, indexOf(QUEUE, CURRENT.fn), 0, ...queue)

      if (run) {
        CURRENT.promise = new Promise((resolve) => (CURRENT.resolve = resolve))
        queuerCycle(QUEUE, CURRENT)
        return CURRENT.promise
      }
      return
    }
    return queuer
  }

  return queuer(...args)
}

// export const queuer = Queuer()

export default Queuer
