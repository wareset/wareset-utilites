'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var object = require('../object');

var keys = require('../keys');

var defineProperty = require('../define-property');

var defineProperties = object.object.defineProperties || ((o, props) => keys.keys(props).map(key => defineProperty.defineProperty(o, key, props[key])));

exports.defineProperties = defineProperties;
