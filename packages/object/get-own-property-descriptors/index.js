'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var getOwnPropertyDescriptor = require('../get-own-property-descriptor');

var getOwnPropertyNames = require('../get-own-property-names');

var getOwnPropertyDescriptors = // Object.getOwnPropertyDescriptors ||
object => {
  var res = {};
  getOwnPropertyNames.getOwnPropertyNames(object).forEach(k => res[k] = getOwnPropertyDescriptor.getOwnPropertyDescriptor(object, k));
  return res;
};

exports.getOwnPropertyDescriptors = getOwnPropertyDescriptors;
