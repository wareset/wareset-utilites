'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var keys = require('../keys');

var entries = object => keys.keys(object).map(k => [k, object[k]]);

exports.entries = entries;
