'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var array = require('@wareset-utilites/array');

var splice = require('@wareset-utilites/array/splice');

var isArray = require('@wareset-utilites/is/is-array');

var isFunction = require('@wareset-utilites/is/is-function');

var isPromise = require('@wareset-utilites/is/is-promise');

var Queuer = (...args) => {
  var queuerCycle = (queue, c) => {
    var fn, res;

    for (var i = 0; i < array.length(queue); i++) {
      fn = queue[i];

      if (!fn.isRun) {
        fn.isRun = true, res = fn(fn.isRes);

        if (isPromise.isPromise(res)) {
          res.finally(() => queuerCycle(queue, c));
          return;
        }
      }

      if (c.fn !== fn) splice.splice(queue, i, 1), i = i - 1;

      if (queue[i - 1] && c.fn !== queue[i - 1]) {
        splice.splice(queue, i - 1, 1), i = i - 1;
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
    if (array.length(args) === 1) data = undefined, callbacks = args[0];else [data, callbacks] = args;

    if (isArray.isArray(callbacks) && array.length(callbacks)) {
      var run = !array.length(QUEUE);
      var queue = [];
      [() => data, ...callbacks].forEach((_fn, k) => {
        var fn = !isFunction.isFunction(_fn) ? () => _fn : _fn;

        var FN = data => {
          CURRENT.fn = FN;
          var res = fn(data);

          if (queue[k + 1]) {
            if (!isPromise.isPromise(res)) {
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
      splice.splice(QUEUE, array.indexOf(QUEUE, CURRENT.fn), 0, ...queue);

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

exports.Queuer = Queuer;
exports.default = Queuer;
