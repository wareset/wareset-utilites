const typed = require('../index').default

test('Infinity:', () => {
  expect(typed(Infinity)).toBe(Number)
  expect(typed.of(Infinity)).toEqual([Number, Object])

  expect(typed(Infinity, Number)).toBe(true)
  expect(typed(Infinity, Number, String)).toBe(true)
  expect(typed(Infinity, String)).toBe(false)
  expect(typed(Infinity, Array, String)).toBe(false)

  expect(typed.of(Infinity, null)).toBe(false)
  expect(typed.of(Infinity, Object, Array, String)).toBe(true)
  expect(typed.of(Infinity, undefined, Array, String)).toBe(false)
})

test('NaN:', () => {
  expect(typed(NaN)).toBe(Number)
  expect(typed.of(NaN)).toEqual([Number, Object])
})

test('undefined:', () => {
  expect(typed(undefined)).toBe(undefined)
  expect(typed.of(undefined)).toEqual([undefined])
})

test('null:', () => {
  expect(typed(null)).toBe(null)
  expect(typed.of(null)).toEqual([null])
})

test('Object:', () => {
  const object = {}
  expect(typed(object)).toBe(Object)
  expect(typed.of(object)).toEqual([Object])
})

test('ObjectCreateNull:', () => {
  const object = Object.create(null)
  expect(typed(object)).toBe(null)
  expect(typed.of(object)).toEqual([null])
})

test('ObjectCreateCustom:', () => {
  const proto = { q: 1 }
  const object = Object.create(proto)
  expect(typed(object)).toBe(proto)
  expect(typed.of(object)).toEqual([proto, Object])
  expect(typed(object, proto)).toBe(true)

  const object2 = Object.create(object)
  expect(typed(object2)).toEqual({})
  expect(typed.of(object2)).toEqual([{}, { q: 1 }, Object])
  expect(typed(object2, object)).toBe(true)
  expect(typed(object2, proto)).toBe(false)
  expect(typed.of(object2, proto)).toBe(true)

  const proto2 = [1, 2, 3]
  const object3 = Object.create(proto2)
  expect(typed(object3)).toBe(proto2)
  expect(typed.of(object3)).toEqual([proto2, Array, Object])
  expect(typed(object3, proto2)).toBe(true)
  expect(typed(object3, Object)).toBe(false)

  const object4 = Object.create(object3)
  expect(typed(object4)).toBe(object3)
  expect(typed.of(object4)).toEqual([{}, proto2, Array, Object])
  expect(typed(object4, object3)).toBe(true)
  expect(typed.of(object4, proto2)).toBe(true)
})

test('Function:', () => {
  expect(typed(() => {})).toBe(Function)
  expect(typed.of(() => {})).toEqual([Function, Object])

  const AsyncFunction = (async () => {}).constructor
  expect(typed(async () => {})).toBe(AsyncFunction)
  expect(typed.of(async () => {})).toEqual([AsyncFunction, Function, Object])

  function* gen() {}
  const GeneratorFunction = gen.constructor
  expect(typed(gen)).toBe(GeneratorFunction)
  expect(typed.of(gen)).toEqual([GeneratorFunction, Function, Object])
})

test('Boolean:', () => {
  const boolean = true
  expect(typed(boolean)).toBe(Boolean)
  expect(typed.of(boolean)).toEqual([Boolean, Object])
})

test('Symbol:', () => {
  const symbol = Symbol('1')
  expect(typed(symbol)).toBe(Symbol)
  expect(typed.of(symbol)).toEqual([Symbol, Object])
})

test('Error:', () => {
  const error = new Error('Error text', 'someFile.js', 10)
  expect(typed(error)).toBe(Error)
  expect(typed.of(error)).toEqual([Error, Object])

  const evalError = new EvalError('Error text', 'someFile.js', 10)
  expect(typed(evalError)).toBe(EvalError)
  expect(typed.of(evalError)).toEqual([EvalError, Error, Object])
})

test('Number:', () => {
  const number = 304010
  expect(typed(number)).toBe(Number)
  expect(typed.of(number)).toEqual([Number, Object])
})

test('Date:', () => {
  const date = new Date()
  expect(typed(date)).toBe(Date)
  expect(typed.of(date)).toEqual([Date, Object])
})

test('String:', () => {
  const string = 'string'
  expect(typed(string)).toBe(String)
  expect(typed.of(string)).toEqual([String, Object])
})

test('RegExp:', () => {
  const regexp = /\s*/g
  expect(typed(regexp)).toBe(RegExp)
  expect(typed.of(regexp)).toEqual([RegExp, Object])
})

test('Array:', () => {
  const array = [1, 2, 3]
  expect(typed(array)).toBe(Array)
  expect(typed.of(array)).toEqual([Array, Object])
})

test('ArrayBuffer:', () => {
  const arrayBuffer = new ArrayBuffer(16)
  expect(typed(arrayBuffer)).toBe(ArrayBuffer)
  // expect(typed.of(arrayBuffer)).toEqual([ArrayBuffer, Object, null]);
  expect(typed(arrayBuffer, ArrayBuffer)).toBe(true)
  // expect(typed.of(arrayBuffer, Object)).toBe(true);
  expect(typed.of(arrayBuffer, null)).toBe(false)
})

test('DataView:', () => {
  const dataView = new DataView(new ArrayBuffer(16))
  expect(typed(dataView)).toBe(DataView)
  expect(typed.of(dataView)).toEqual([DataView, Object])
})

test('Map:', () => {
  const map = new Map()
  expect(typed(map)).toBe(Map)
  expect(typed.of(map)).toEqual([Map, Object])
})

test('Set:', () => {
  const set = new Set()
  expect(typed(set)).toBe(Set)
  expect(typed.of(set)).toEqual([Set, Object])
})

test('WeakMap:', () => {
  const map = new WeakMap()
  expect(typed(map)).toBe(WeakMap)
  expect(typed.of(map)).toEqual([WeakMap, Object])
})

test('WeakSet:', () => {
  const set = new WeakSet()
  expect(typed(set)).toBe(WeakSet)
  expect(typed.of(set)).toEqual([WeakSet, Object])
})

test('Class:', () => {
  class Qwer {}
  class Wert extends Qwer {}
  class Erty extends Wert {}

  const newClass = new Erty()
  expect(typed(newClass)).toBe(Erty)
  expect(typed.of(newClass)).toEqual([Erty, Wert, Qwer, Object])
})

// test('DIV:', () => {
//   const div = document.createElement('div')
//   expect(typed(div)).toBe(HTMLDivElement)
//   // expect(typed.of(div)).toEqual([
//   //   HTMLDivElement,
//   //   HTMLElement,
//   //   Element,
//   //   Node,
//   //   EventTarget,
//   //   Object,
//   //   null
//   // ]);
// })
