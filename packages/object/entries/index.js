'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var keys = require('../keys');

var entries = value => keys.keys(value).map(k => [k, value[k]]);

exports.entries = entries;
