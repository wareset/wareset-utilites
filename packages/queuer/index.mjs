import { length, indexOf } from '@wareset-utilites/array';
import { splice } from '@wareset-utilites/array/splice';
import { isArray } from '@wareset-utilites/is/is-array';
import { isFunction } from '@wareset-utilites/is/is-function';
import { isPromise } from '@wareset-utilites/is/is-promise';

var Queuer = (...args) => {
  var queuerCycle = (queue, c) => {
    var fn, res;

    for (var i = 0; i < length(queue); i++) {
      fn = queue[i];

      if (!fn.isRun) {
        fn.isRun = true, res = fn(fn.isRes);

        if (isPromise(res)) {
          res.finally(() => queuerCycle(queue, c));
          return;
        }
      }

      if (c.fn !== fn) splice(queue, i, 1), i = i - 1;

      if (queue[i - 1] && c.fn !== queue[i - 1]) {
        splice(queue, i - 1, 1), i = i - 1;
      }
    }

    queue.length = 0;
    c.resolve(true);
  };

  var QUEUE = [];
  var CURRENT = {
    fn: () => {}
  };

  var queuer = (...args) => {
    var data, callbacks;
    if (length(args) === 1) data = undefined, callbacks = args[0];else [data, callbacks] = args;

    if (isArray(callbacks) && length(callbacks)) {
      var run = !length(QUEUE);
      var queue = [];
      [() => data, ...callbacks].forEach((_fn, k) => {
        var fn = !isFunction(_fn) ? () => _fn : _fn;

        var FN = data => {
          CURRENT.fn = FN;
          var res = fn(data);

          if (queue[k + 1]) {
            if (!isPromise(res)) {
              if (queue[k + 1]) queue[k + 1].isRes = res;
            } else {
              res.then(res => queue[k + 1] && (queue[k + 1].isRes = res));
            }
          }

          return res;
        };

        queue.push(FN);
      });
      queue[0].isRun = true, queue[1].isRes = data;
      splice(QUEUE, indexOf(QUEUE, CURRENT.fn), 0, ...queue);

      if (run) {
        CURRENT.promise = new Promise(resolve => CURRENT.resolve = resolve);
        queuerCycle(QUEUE, CURRENT);
        return CURRENT.promise;
      }

      return;
    }

    return queuer;
  };

  return queuer(...args);
};

export default Queuer;
export { Queuer };
