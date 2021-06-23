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

var values = __Object____default['default'].values || (object => keys__default['default'](object).map(k => object[k]));

exports.default = values;
exports.values = values;
