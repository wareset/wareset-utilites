type Callbacks = Array<any>

const queuerCycle = (queue: Callbacks, c: any): void => {
  let fn, res
  for (let i = 0; i < queue.length; i++) {
    fn = queue[i]
    if (!fn.isRun) {
      // console.log(queue.length);
      ;(fn.isRun = true), (res = fn(fn.isRes))
      if (res instanceof Promise) {
        res.finally(() => queuerCycle(queue, c))
        return
      }
    }

    if (c.fn !== fn) queue.splice(i, 1), (i = i - 1)
    if (queue[i - 1] && c.fn !== queue[i - 1]) {
      queue.splice(i - 1, 1), (i = i - 1)
    }
  }
  // console.log(c);
  // if (queue.length) queuerCycle(queue, c);
  queue.length = 0
  c.resolve(true)
}

export const Queuer = (...args: Callbacks): Function | Promise<any> | void => {
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
    if (args.length === 1) (data = undefined), (callbacks = args[0])
    else [data, callbacks] = args

    if (Array.isArray(callbacks) && callbacks.length) {
      const run = !QUEUE.length

      const queue: Callbacks = []
      ;[(): any => data, ...callbacks].forEach((_fn, k) => {
        const fn = typeof _fn !== 'function' ? (): Function => _fn : _fn
        const FN = (data: any): any => {
          CURRENT.fn = FN
          const res = fn(data)
          if (queue[k + 1]) {
            if (!(res instanceof Promise)) {
              if (queue[k + 1]) queue[k + 1].isRes = res
            } else {
              res.then((res) => queue[k + 1] && (queue[k + 1].isRes = res))
            }
          }
          return res
        }
        queue.push(FN)
      })
      ;(queue[0].isRun = true), (queue[1].isRes = data)
      QUEUE.splice(QUEUE.indexOf(CURRENT.fn), 0, ...queue)

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

export const queuer = Queuer()

export default queuer
