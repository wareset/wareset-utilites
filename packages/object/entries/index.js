'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var __Object__ = require('../Object');

var keys = require('../keys');

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {
    'default': e
  };
}

var __Object____default = /*#__PURE__*/_interopDefaultLegacy(__Object__);

var keys__default = /*#__PURE__*/_interopDefaultLegacy(keys);

var entries = __Object____default['default'].entries || (object => keys__default['default'](object).map(k => [k, object[k]]));

exports.default = entries;
exports.entries = entries;
