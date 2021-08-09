'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _Object = require('../Object');

var keys = require('../keys');

var values = _Object.Object.values || (e => keys.keys(e).map(t => e[t]));

exports.default = values;
exports.values = values;
