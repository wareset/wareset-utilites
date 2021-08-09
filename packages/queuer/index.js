'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var last = require('@wareset-utilites/array/last');

var isArray = require('@wareset-utilites/is/isArray');

var isPromise = require('@wareset-utilites/is/isPromise');

var isFunction = require('@wareset-utilites/is/isFunction');

class Queuer {
  constructor(s) {
    this.res = s, this.list = [], this.is = !1;
  }

  run() {
    if (!this.is && this.list.length) {
      this.is = !0;

      var e = this.list.shift(),
          h = (isArray.isArray(e) ? [...e] : [e]).map(s => isFunction.isFunction(s) ? s(this.res) : s),
          o = t => {
        this.res = last.last(t), this.is = !1, this.run();
      };

      h.some(isPromise.isPromise) ? Promise.all(h).then(o) : o(h);
    }
  }

  add(...s) {
    return this.list.unshift(...s), this.run(), this;
  }

}

exports.Queuer = Queuer;
exports.default = Queuer;
