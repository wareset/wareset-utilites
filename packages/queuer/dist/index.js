"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Queuer = Queuer;
exports.queuer = void 0;

const queuerCycle = (queue, c) => {
  let fn, res;

  for (let i = 0; i < queue.length; i++) {
    fn = queue[i];

    if (!fn.isRun) {
      // console.log(queue.length);
      fn.isRun = true, res = fn(fn.isRes);

      if (res instanceof Promise) {
        return res.finally(() => queuerCycle(queue, c));
      }
    }

    if (c.fn !== fn) queue.splice(i, 1), i = i - 1;

    if (queue[i - 1] && c.fn !== queue[i - 1]) {
      queue.splice(i - 1, 1), i = i - 1;
    }
  } // console.log(c);
  // if (queue.length) queuerCycle(queue, c);


  queue.length = 0;
  c.resolve(true);
};

function Queuer(...args) {
  const QUEUE = [];
  const CURRENT = {
    fn: () => {}
  };

  function queuer(...args) {
    let data, callbacks;
    if (args.length === 1) data = undefined, callbacks = args[0];else [data, callbacks] = args;

    if (Array.isArray(callbacks) && callbacks.length) {
      const run = !QUEUE.length;
      const queue = [];
      [() => data, ...callbacks].forEach((_fn, k) => {
        const fn = typeof _fn !== 'function' ? () => _fn : _fn;

        const FN = data => {
          CURRENT.fn = FN;
          const res = fn(data);

          if (queue[k + 1]) {
            if (!(res instanceof Promise)) {
              if (queue[k + 1]) queue[k + 1].isRes = res;
            } else res.then(res => queue[k + 1] && (queue[k + 1].isRes = res));
          }

          return res;
        };

        queue.push(FN);
      });
      queue[0].isRun = true, queue[1].isRes = data;
      QUEUE.splice(QUEUE.indexOf(CURRENT.fn), 0, ...queue);

      if (run) {
        CURRENT.promise = new Promise(resolve => CURRENT.resolve = resolve);
        queuerCycle(QUEUE, CURRENT);
      }

      return CURRENT.promise;
    }

    return queuer;
  }

  return queuer(...args);
}

const queuer = Queuer();
exports.queuer = queuer;