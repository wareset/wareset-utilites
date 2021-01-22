const deepequal = require('../dist/index').default

// const DATA_1 = {
//   Infinity: Infinity,
//   NaN: NaN,
//   undefined: undefined,
//   null: null,

//   Object: { q: 1, w: 2, e: {}, r: {} },

//   Function: () => {},

//   Boolean: true,

//   Symbol: Symbol('1'),

//   Error: new Error('Error text', 'someFile.js', 10),

//   Number: 1000,

//   Date: new Date(304010),

//   String: 'string',

//   RegExp: /\s*/g,

//   Array: [1, 2, { q: 1 }, {}],

//   ArrayBuffer: new ArrayBuffer(16),
//   DataView: new DataView(new ArrayBuffer(16)),
//   Uint32Array: new Uint32Array(new ArrayBuffer(16)),

//   Map: new Map([
//     [1, { q: 1 }],
//     [2, { w: 2 }]
//   ]),
//   Set: new Set([1, 2]),
//   WeakMap: new WeakMap([[{}, {}]]),
//   WeakSet: new WeakSet([{}, {}]),

//   Promise: new Promise(() => {})
// };

test('GENERAL:', () => {
  const symbol = Symbol('qwe')

  const q1 = {
    [symbol]: 12,
    q: null,
    w: {},
    e: new Map([
      [
        2,
        {
          r: [1, 2, 3, new Set([12])]
        }
      ]
    ]),
    a: { s: { d: { f: {} } } }
  }
  q1.a.s.d.f = q1.e

  const q2 = {
    [symbol]: 12,
    q: null,
    w: {},
    e: new Map([
      [
        2,
        {
          r: [1, 2, 3, new Set([12])]
        }
      ]
    ]),
    a: { s: { d: { f: {} } } }
  }
  q2.a.s.d.f = q2.e

  expect(deepequal(q1, q2)).toBe(true)
  q1.a.s.zxc = q2
  expect(deepequal(q1, q2)).toBe(false)
  q2.a.s.zxc = q2
  expect(deepequal(q1, q2)).toBe(true)
  q2.w.z = q1
  expect(deepequal(q1, q2)).toBe(false)
})

test('Infinity:', () => {
  expect(deepequal(Infinity, Infinity)).toBe(true)
  expect(deepequal(Infinity, -Infinity)).toBe(false)
  expect(deepequal(Infinity, 0)).toBe(false)
  expect(deepequal(Infinity, null)).toBe(false)
  expect(deepequal(Infinity, undefined)).toBe(false)
})

test('NaN:', () => {
  expect(deepequal(NaN, NaN)).toBe(true)
  expect(deepequal(NaN, -NaN)).toBe(true)
  expect(deepequal(NaN, 0)).toBe(false)
  expect(deepequal(NaN, null)).toBe(false)
  expect(deepequal(NaN, undefined)).toBe(false)
})

test('undefined:', () => {
  expect(deepequal(undefined, undefined)).toBe(true)
  expect(deepequal(undefined, null)).toBe(false)
  expect(deepequal(undefined, NaN)).toBe(false)
})

test('null:', () => {
  expect(deepequal(null, null)).toBe(true)
  expect(deepequal(null, undefined)).toBe(false)
  expect(deepequal(null, NaN)).toBe(false)
})

test('Object:', () => {
  expect(deepequal({}, {}, 0)).toBe(false)
  expect(deepequal({}, {}, 1)).toBe(true)
  expect(deepequal({ q: {} }, { q: {} }, 1)).toBe(false)
  expect(deepequal({ q: {} }, { q: {} }, 2)).toBe(true)

  const object = { q: 1, w: 2, e: {}, r: {} }
  const object2 = { q: 1, r: {}, w: 2, e: {} }

  expect(deepequal(object, object2)).toBe(true)
  object.q = 5
  expect(deepequal(object, object2)).toBe(false)
})

test('ObjectWithCustomProto:', () => {
  const objectNull = Object.create(null)
  const objectObj = Object.create({})
  const objectArr = Object.create([])

  expect(deepequal({}, objectNull)).toBe(false)
  expect(deepequal({}, objectObj)).toBe(false)
  expect(deepequal({}, objectArr)).toBe(false)
})

test('Function:', () => {
  const func = () => {}
  expect(deepequal(func, func)).toBe(true)
  expect(deepequal(func, () => {})).toBe(false)
})

test('Boolean:', () => {
  const boolean = true
  expect(deepequal(boolean, true)).toBe(true)
  expect(deepequal(boolean, false)).toBe(false)
  expect(deepequal(boolean, 1)).toBe(false)
  expect(deepequal(boolean, 0)).toBe(false)
})

test('Symbol:', () => {
  const symbol1 = Symbol('1')

  expect(deepequal(symbol1, symbol1)).toBe(true)
  expect(deepequal.extended(symbol1, symbol1, { symbols: false })).toBe(true)
  expect(deepequal(symbol1, Symbol('1'))).toBe(false)
  expect(deepequal(symbol1, Symbol('2'))).toBe(false)

  const object1 = { [symbol1]: 1 }
  const object2 = { [symbol1]: 1 }
  expect(deepequal(object1, object2)).toBe(true)
  expect(deepequal.extended(object1, object2, { symbols: false })).toBe(true)

  const symbol2 = Symbol('1')

  const object3 = { [symbol1]: 1 }
  const object4 = { [symbol2]: 1 }
  expect(deepequal(object3, object4)).toBe(false)
  expect(deepequal.extended(object3, object4, { symbols: false })).toBe(true)
})

test('Error:', () => {
  const error = new Error('Error text', 'someFile.js', 10)
  const error2 = new Error('Error text', 'someFile.js', 10)
  expect(deepequal(error, error2)).toBe(true)
  error2.q = 1
  expect(deepequal(error, error2)).toBe(false)
  expect(deepequal(error, new Error('Error text2', 'someFile.js', 10))).toBe(
    false
  )
})

test('Number:', () => {
  const number = 1000
  expect(deepequal(number, 1000)).toBe(true)
  expect(deepequal(number, 1_000)).toBe(true)
  expect(deepequal(number, 2000)).toBe(false)
})

test('Date:', () => {
  const date = new Date(304010)
  expect(deepequal(date, new Date(304010))).toBe(true)
  expect(deepequal(date, new Date(304011))).toBe(false)
})

test('String:', () => {
  const string = 'string'
  expect(deepequal(string, 'string')).toBe(true)
  expect(deepequal(string, 'string\0')).toBe(false)
})

test('RegExp:', () => {
  const regexp = /\s*/g
  expect(deepequal(regexp, /\s*/g)).toBe(true)
  expect(deepequal(regexp, /\s+/g)).toBe(false)
  expect(deepequal(regexp, /\s*/)).toBe(false)
})

test('Array:', () => {
  const array = [1, 2, { q: 1 }, {}]
  expect(deepequal(array, [1, 2, { q: 1 }, {}])).toBe(true)
  expect(deepequal(array, [1, { q: 1 }, 2, {}])).toBe(false)
  expect(deepequal(array, [1, 2, { q: 1 }, { w: 2 }])).toBe(false)

  const q1 = [1, 2, 3]
  const q2 = [1, 2, 3]
  expect(deepequal(q1, q2)).toBe(true)
  q2.q = 1
  expect(deepequal(q1, q2)).toBe(false)
})

test('ArrayBuffer:', () => {
  const arrayBuffer = new ArrayBuffer(16)
  expect(deepequal(arrayBuffer, new ArrayBuffer(16))).toBe(true)
  expect(deepequal(arrayBuffer, new ArrayBuffer(32))).toBe(false)
})
test('DataView:', () => {
  const dataView = new DataView(new ArrayBuffer(16))
  const dataView2 = new DataView(new ArrayBuffer(16))
  expect(deepequal(dataView, dataView2)).toBe(true)
  dataView2.setInt8(12, 42)
  expect(deepequal(dataView, dataView2)).toBe(false)
})
test('Uint32Array:', () => {
  const uint32Array = new Uint32Array(new ArrayBuffer(16))
  const uint32Array2 = new Uint32Array(new ArrayBuffer(16))
  expect(deepequal(uint32Array, uint32Array2)).toBe(true)
  uint32Array2[0] = 12
  expect(deepequal(uint32Array, uint32Array2)).toBe(false)
})

test('Map and Set:', () => {
  const set = new Set([1, 2])
  const map = new Map([
    [1, { q: 1 }],
    [2, { w: 2 }]
  ])

  expect(
    deepequal(
      map,
      new Map([
        [1, { q: 1 }],
        [2, { w: 2 }]
      ])
    )
  ).toBe(true)
  expect(
    deepequal(
      map,
      new Map([
        [1, { q: 1 }],
        [2, { w: 3 }]
      ])
    )
  ).toBe(false)

  expect(deepequal(set, new Set([1, 2]))).toBe(true)
  expect(deepequal(set, new Set([1, 3]))).toBe(false)
})
test('WeakMap and WeakSet:', () => {
  const weakMap = new WeakMap([[{}, {}]])
  const weakSet = new WeakSet([{}, {}])

  const weakMap2 = new WeakMap([[{}, {}]])
  const weakSet2 = new WeakSet([{}, {}])

  expect(deepequal(weakMap, weakMap2)).toBe(true)
  expect(deepequal.extended(weakMap, weakMap2, { noweaks: true })).toBe(false)

  expect(deepequal(weakSet, weakSet2)).toBe(true)
  expect(deepequal.extended(weakSet, weakSet2, { noweaks: true })).toBe(false)

  weakMap.q = 1
  weakSet.q = 1

  expect(deepequal(weakMap, weakMap2)).toBe(false)
  expect(deepequal(weakSet, weakSet2)).toBe(false)
})

test('Promise:', () => {
  expect(deepequal(new Promise(() => {}), new Promise(() => {}))).toBe(true)
  expect(
    deepequal(
      Promise.resolve(() => {}),
      Promise.resolve(() => {})
    )
  ).toBe(true)
  expect(
    deepequal(
      new Promise(() => {}),
      Promise.resolve(() => {})
    )
  ).toBe(true)
})

test('INFINIY_LOOP:', () => {
  const q1 = { w: { e: { r: 1 } } }
  const q2 = { w: { e: { r: 1 } } }

  q1.a = q2.a = 1
  ;(q1.w.e.b = q2), (q2.w.e.b = q1)
  q1.w.c = q2.w.c = 2

  expect(deepequal(q1, q2)).toBe(true)
  q1.w.e.r = 2
  expect(deepequal(q1, q2)).toBe(false)
})

test('DEEP:', () => {
  const q1 = { w: { e: { r: { t: 1 } } } }
  const q2 = { w: { e: { r: { t: 1 } } } }

  expect(deepequal(q1, q2, true)).toBe(true)
  expect(deepequal(q1, q2, 5)).toBe(true)
  expect(deepequal(q1, q2, 4)).toBe(true)
  expect(deepequal(q1, q2, 3)).toBe(false)
  expect(deepequal(q1, q2, 1)).toBe(false)
  expect(deepequal(q1, q2, 0)).toBe(false)
  expect(deepequal(q1, q2, false)).toBe(false)
  expect(deepequal(q1, q2, -1)).toBe(false)
})

test('CLASSES:', () => {
  let qq = 0
  class Qwer {
    get q() {
      return !qq ? 12 : ++qq
    }
  }

  class Wert extends Qwer {}

  expect(deepequal(new Qwer(), new Qwer())).toBe(true)
  expect(deepequal(new Wert(), new Wert())).toBe(true)
  qq = 2
  expect(deepequal(new Qwer(), new Qwer())).toBe(false)
  expect(deepequal(new Wert(), new Wert())).toBe(false)
  expect(deepequal.extended(new Qwer(), new Qwer(), { immerse: false })).toBe(
    true
  )
  expect(deepequal.extended(new Wert(), new Wert(), { immerse: false })).toBe(
    true
  )
})
