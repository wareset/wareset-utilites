'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _Object = require('./Object');

var hasOwnProperty = require('./hasOwnProperty');

var isPrototypeOf = require('./isPrototypeOf');

var propertyIsEnumerable = require('./propertyIsEnumerable');

var toLocaleString = require('./toLocaleString');

var toString = require('./toString');

var valueOf = require('./valueOf');

var assign = require('./assign');

var create = require('./create');

var defineProperties = require('./defineProperties');

var defineProperty = require('./defineProperty');

var entries = require('./entries');

var freeze = require('./freeze');

var fromEntries = require('./fromEntries');

var getOwnPropertyDescriptor = require('./getOwnPropertyDescriptor');

var getOwnPropertyDescriptors = require('./getOwnPropertyDescriptors');

var getOwnPropertyNames = require('./getOwnPropertyNames');

var getOwnPropertySymbols = require('./getOwnPropertySymbols');

var getPrototypeOf = require('./getPrototypeOf');

var is = require('./is');

var isExtensible = require('./isExtensible');

var isFrozen = require('./isFrozen');

var isSealed = require('./isSealed');

var keys = require('./keys');

var preventExtensions = require('./preventExtensions');

var seal = require('./seal');

var setPrototypeOf = require('./setPrototypeOf');

var values = require('./values');

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {
    'default': e
  };
}

var _Object__default = /*#__PURE__*/_interopDefaultLegacy(_Object);

var hasOwnProperty__default = /*#__PURE__*/_interopDefaultLegacy(hasOwnProperty);

var isPrototypeOf__default = /*#__PURE__*/_interopDefaultLegacy(isPrototypeOf);

var propertyIsEnumerable__default = /*#__PURE__*/_interopDefaultLegacy(propertyIsEnumerable);

var toLocaleString__default = /*#__PURE__*/_interopDefaultLegacy(toLocaleString);

var toString__default = /*#__PURE__*/_interopDefaultLegacy(toString);

var valueOf__default = /*#__PURE__*/_interopDefaultLegacy(valueOf);

var assign__default = /*#__PURE__*/_interopDefaultLegacy(assign);

var create__default = /*#__PURE__*/_interopDefaultLegacy(create);

var defineProperties__default = /*#__PURE__*/_interopDefaultLegacy(defineProperties);

var defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(defineProperty);

var entries__default = /*#__PURE__*/_interopDefaultLegacy(entries);

var freeze__default = /*#__PURE__*/_interopDefaultLegacy(freeze);

var fromEntries__default = /*#__PURE__*/_interopDefaultLegacy(fromEntries);

var getOwnPropertyDescriptor__default = /*#__PURE__*/_interopDefaultLegacy(getOwnPropertyDescriptor);

var getOwnPropertyDescriptors__default = /*#__PURE__*/_interopDefaultLegacy(getOwnPropertyDescriptors);

var getOwnPropertyNames__default = /*#__PURE__*/_interopDefaultLegacy(getOwnPropertyNames);

var getOwnPropertySymbols__default = /*#__PURE__*/_interopDefaultLegacy(getOwnPropertySymbols);

var getPrototypeOf__default = /*#__PURE__*/_interopDefaultLegacy(getPrototypeOf);

var is__default = /*#__PURE__*/_interopDefaultLegacy(is);

var isExtensible__default = /*#__PURE__*/_interopDefaultLegacy(isExtensible);

var isFrozen__default = /*#__PURE__*/_interopDefaultLegacy(isFrozen);

var isSealed__default = /*#__PURE__*/_interopDefaultLegacy(isSealed);

var keys__default = /*#__PURE__*/_interopDefaultLegacy(keys);

var preventExtensions__default = /*#__PURE__*/_interopDefaultLegacy(preventExtensions);

var seal__default = /*#__PURE__*/_interopDefaultLegacy(seal);

var setPrototypeOf__default = /*#__PURE__*/_interopDefaultLegacy(setPrototypeOf);

var values__default = /*#__PURE__*/_interopDefaultLegacy(values);

Object.defineProperty(exports, 'Object', {
  enumerable: true,
  get: function () {
    return _Object__default['default'];
  }
});
Object.defineProperty(exports, 'hasOwnProperty', {
  enumerable: true,
  get: function () {
    return hasOwnProperty__default['default'];
  }
});
Object.defineProperty(exports, 'isPrototypeOf', {
  enumerable: true,
  get: function () {
    return isPrototypeOf__default['default'];
  }
});
Object.defineProperty(exports, 'propertyIsEnumerable', {
  enumerable: true,
  get: function () {
    return propertyIsEnumerable__default['default'];
  }
});
Object.defineProperty(exports, 'toLocaleString', {
  enumerable: true,
  get: function () {
    return toLocaleString__default['default'];
  }
});
Object.defineProperty(exports, 'toString', {
  enumerable: true,
  get: function () {
    return toString__default['default'];
  }
});
Object.defineProperty(exports, 'valueOf', {
  enumerable: true,
  get: function () {
    return valueOf__default['default'];
  }
});
Object.defineProperty(exports, 'assign', {
  enumerable: true,
  get: function () {
    return assign__default['default'];
  }
});
Object.defineProperty(exports, 'create', {
  enumerable: true,
  get: function () {
    return create__default['default'];
  }
});
Object.defineProperty(exports, 'defineProperties', {
  enumerable: true,
  get: function () {
    return defineProperties__default['default'];
  }
});
Object.defineProperty(exports, 'defineProperty', {
  enumerable: true,
  get: function () {
    return defineProperty__default['default'];
  }
});
Object.defineProperty(exports, 'entries', {
  enumerable: true,
  get: function () {
    return entries__default['default'];
  }
});
Object.defineProperty(exports, 'freeze', {
  enumerable: true,
  get: function () {
    return freeze__default['default'];
  }
});
Object.defineProperty(exports, 'fromEntries', {
  enumerable: true,
  get: function () {
    return fromEntries__default['default'];
  }
});
Object.defineProperty(exports, 'getOwnPropertyDescriptor', {
  enumerable: true,
  get: function () {
    return getOwnPropertyDescriptor__default['default'];
  }
});
Object.defineProperty(exports, 'getOwnPropertyDescriptors', {
  enumerable: true,
  get: function () {
    return getOwnPropertyDescriptors__default['default'];
  }
});
Object.defineProperty(exports, 'getOwnPropertyNames', {
  enumerable: true,
  get: function () {
    return getOwnPropertyNames__default['default'];
  }
});
Object.defineProperty(exports, 'getOwnPropertySymbols', {
  enumerable: true,
  get: function () {
    return getOwnPropertySymbols__default['default'];
  }
});
Object.defineProperty(exports, 'getPrototypeOf', {
  enumerable: true,
  get: function () {
    return getPrototypeOf__default['default'];
  }
});
Object.defineProperty(exports, 'is', {
  enumerable: true,
  get: function () {
    return is__default['default'];
  }
});
Object.defineProperty(exports, 'isExtensible', {
  enumerable: true,
  get: function () {
    return isExtensible__default['default'];
  }
});
Object.defineProperty(exports, 'isFrozen', {
  enumerable: true,
  get: function () {
    return isFrozen__default['default'];
  }
});
Object.defineProperty(exports, 'isSealed', {
  enumerable: true,
  get: function () {
    return isSealed__default['default'];
  }
});
Object.defineProperty(exports, 'keys', {
  enumerable: true,
  get: function () {
    return keys__default['default'];
  }
});
Object.defineProperty(exports, 'preventExtensions', {
  enumerable: true,
  get: function () {
    return preventExtensions__default['default'];
  }
});
Object.defineProperty(exports, 'seal', {
  enumerable: true,
  get: function () {
    return seal__default['default'];
  }
});
Object.defineProperty(exports, 'setPrototypeOf', {
  enumerable: true,
  get: function () {
    return setPrototypeOf__default['default'];
  }
});
Object.defineProperty(exports, 'values', {
  enumerable: true,
  get: function () {
    return values__default['default'];
  }
});
