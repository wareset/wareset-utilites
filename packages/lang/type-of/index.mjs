var __typeOf__ = v => typeof v;

var __es__ = __typeOf__('');

var typeOf = (value, type) => (value = __typeOf__(value), __typeOf__(type) === __es__ ? value === type : value);

export { typeOf };
