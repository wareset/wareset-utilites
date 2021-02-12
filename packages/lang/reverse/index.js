'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var reverse = (list, clone) => clone ? reverse([...list]) : list.reverse();

exports.reverse = reverse;
