import last from '@wareset-utilites/array/last';
import isArray from '@wareset-utilites/is/isArray';
import isPromise from '@wareset-utilites/is/isPromise';
import isFunction from '@wareset-utilites/is/isFunction';

class Queuer {
  constructor(res) {
    this.res = res;
    this.list = [];
    this.is = false;
  }

  run() {
    if (!this.is && this.list.length) {
      this.is = true;
      var arr = this.list.shift();
      var tmp = (isArray(arr) ? [...arr] : [arr]).map(v => isFunction(v) ? v(this.res) : v);

      var fin = tmp => {
        this.res = last(tmp), this.is = false, this.run();
      };

      tmp.some(isPromise) ? Promise.all(tmp).then(fin) : fin(tmp);
    }
  }

  add(...callbacks) {
    this.list.unshift(...callbacks), this.run();
    return this;
  }

}

export default Queuer;
export { Queuer };
