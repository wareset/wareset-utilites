'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var last = require('@wareset-utilites/array/last');

var isArray = require('@wareset-utilites/is/isArray');

var isPromise = require('@wareset-utilites/is/isPromise');

var isFunction = require('@wareset-utilites/is/isFunction');

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {
    'default': e
  };
}

var last__default = /*#__PURE__*/_interopDefaultLegacy(last);

var isArray__default = /*#__PURE__*/_interopDefaultLegacy(isArray);

var isPromise__default = /*#__PURE__*/_interopDefaultLegacy(isPromise);

var isFunction__default = /*#__PURE__*/_interopDefaultLegacy(isFunction);

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
      var tmp = (isArray__default['default'](arr) ? [...arr] : [arr]).map(v => isFunction__default['default'](v) ? v(this.res) : v);

      var fin = tmp => {
        this.res = last__default['default'](tmp), this.is = false, this.run();
      };

      tmp.some(isPromise__default['default']) ? Promise.all(tmp).then(fin) : fin(tmp);
    }
  }

  add(...callbacks) {
    this.list.unshift(...callbacks), this.run();
    return this;
  }

}

exports.Queuer = Queuer;
exports.default = Queuer;
