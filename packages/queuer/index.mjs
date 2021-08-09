import { last } from '@wareset-utilites/array/last';
import { isArray } from '@wareset-utilites/is/isArray';
import { isPromise } from '@wareset-utilites/is/isPromise';
import { isFunction } from '@wareset-utilites/is/isFunction';

class Queuer {
  constructor(s) {
    this.res = s, this.list = [], this.is = !1;
  }

  run() {
    if (!this.is && this.list.length) {
      this.is = !0;

      var e = this.list.shift(),
          h = (isArray(e) ? [...e] : [e]).map(s => isFunction(s) ? s(this.res) : s),
          o = t => {
        this.res = last(t), this.is = !1, this.run();
      };

      h.some(isPromise) ? Promise.all(h).then(o) : o(h);
    }
  }

  add(...s) {
    return this.list.unshift(...s), this.run(), this;
  }

}

export default Queuer;
export { Queuer };
