'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var keys = require('../keys');

var values = object => keys.keys(object).map(k => object[k]);

exports.values = values;
