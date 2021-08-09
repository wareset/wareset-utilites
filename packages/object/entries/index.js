'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _Object = require('../Object');

var keys = require('../keys');

var entries = _Object.Object.entries || (e => keys.keys(e).map(t => [t, e[t]]));

exports.default = entries;
exports.entries = entries;
