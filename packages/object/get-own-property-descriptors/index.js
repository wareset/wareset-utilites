'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var getOwnPropertyDescriptor = require('../get-own-property-descriptor');

var getOwnPropertyNames = require('../get-own-property-names');

var getOwnPropertyDescriptors = // Object.getOwnPropertyDescriptors ||
o => {
  var res = {};
  getOwnPropertyNames.getOwnPropertyNames(o).forEach(k => res[k] = getOwnPropertyDescriptor.getOwnPropertyDescriptor(o, k));
  return res;
};

exports.getOwnPropertyDescriptors = getOwnPropertyDescriptors;
