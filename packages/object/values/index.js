'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var keys = require('../keys');

var values = value => keys.keys(value).map(k => value[k]);

exports.values = values;
