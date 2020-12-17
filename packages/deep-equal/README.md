# `@wareset-utilites/deep-equal`

Compares primitive and objects in depth.

# Usage

### Require or Import:

```js
const deepEqual = require('@wareset-utilites/deep-equal');
// or
import deepEqual from '@wareset-utilites/deep-equal';
```

## Methods:

```typescript
declare function deepEqual(a: any, b: any, depth?: boolean | number): boolean;
declare function deepEqual.extended(a: any, b: any, options?: {
    depth?: boolean | number = true,
    symbols?: boolean = true;
    immerse?: boolean = true;
    noweaks?: boolean = false;
    natives?: boolean = false;
}): boolean;
```

### Usage for objects:

```js
test('Number:', () => {
  const number = 1000;
  expect(deepequal(number, 1000)).toBe(true);
  expect(deepequal(number, 2000)).toBe(false);
});

test('Object:', () => {
  const object = { q: 1, w: 2, e: {}, r: {} };
  const object2 = { q: 1, r: {}, w: 2, e: {} };

  expect(deepequal(object, object2)).toBe(true);
  object.q = 5;
  expect(deepequal(object, object2)).toBe(false);
});

test('ObjectWithCustomProto:', () => {
  const objectNull = Object.create(null);
  const objectObj = Object.create({});
  const objectArr = Object.create([]);

  expect(deepequal({}, objectNull)).toBe(false);
  expect(deepequal({}, objectObj)).toBe(false);
  expect(deepequal({}, objectArr)).toBe(false);
});
```

### Cyclic objects:

Infinitely nested objects are always processed

```js
test('INFINIY_LOOP:', () => {
  const q1 = { w: { e: { r: 1 } } };
  const q2 = { w: { e: { r: 1 } } };

  q1.a = q2.a = 1;
  (q1.w.e.b = q2), (q2.w.e.b = q1);
  q1.w.c = q2.w.c = 2;

  expect(deepequal(q1, q2)).toBe(true);
  q1.w.e.r = 2;
  expect(deepequal(q1, q2)).toBe(false);
});
```

### other:

```js
test('Uint32Array:', () => {
  const uint32Array = new Uint32Array(new ArrayBuffer(16));
  const uint32Array2 = new Uint32Array(new ArrayBuffer(16));
  expect(deepequal(uint32Array, uint32Array2)).toBe(true);
  uint32Array2[0] = 12;
  expect(deepequal(uint32Array, uint32Array2)).toBe(false);
});

test('Map and Set:', () => {
  const set1 = new Set([1, 2]);
  const map1 = new Map([[1, { q: 1 }]]);

  expect(deepequal(map1, new Map([[1, { q: 1 }]]))).toBe(true);
  expect(deepequal(map1, new Map([[1, { q: 1 }]]))).toBe(false);

  expect(deepequal(set1, new Set([1, 2]))).toBe(true);
  expect(deepequal(set1, new Set([1, 3]))).toBe(false);
});
```

## Options:

#### depth:

Depth of checking objects

```js
// deepequal(q1, q2, 15) === deepequal(q1, q2, { depth: 15 })
// deepequal(q1, q2, { depth:15, symbols:true, immerse:true, noweaks:false })

expect(deepequal({}, {}, 0)).toBe(false);
expect(deepequal({}, {}, 1)).toBe(true);
expect(deepequal({ q: {} }, { q: {} }, 1)).toBe(false);
expect(deepequal({ q: {} }, { q: {} }, 2)).toBe(true);

const q1 = { w: { e: { r: { t: 1 } } } };
const q2 = { w: { e: { r: { t: 1 } } } };

expect(deepequal(q1, q2, true)).toBe(true);
expect(deepequal(q1, q2, 5)).toBe(true);
expect(deepequal(q1, q2, 4)).toBe(true);
expect(deepequal(q1, q2, 3)).toBe(false);
expect(deepequal(q1, q2, 0)).toBe(false);
expect(deepequal(q1, q2, false)).toBe(false);
```

#### symbols:

Whether to treat symbols as keys in objects

```js
const symbol1 = Symbol('1');
const symbol2 = Symbol('2');

const object1 = { q: 1, [symbol1]: 1 };
const object2 = { q: 1, [symbol2]: 1 };

expect(deepequal(object1, object2)).toBe(false);
expect(deepequal.extended(object3, object4, { symbols: true })).toBe(false);

expect(deepequal.extended(object3, object4, { symbols: false })).toBe(true);
```

#### immerse:

Whether to check parent methods and getters:

```js
test('CLASSES:', () => {
  let qq = 0;
  class Qwer {
    get q() {
      return !qq ? 12 : ++qq;
    }
  }

  expect(deepequal(new Qwer(), new Qwer())).toBe(true);
  qq = 2;
  expect(deepequal(new Qwer(), new Qwer())).toBe(false);
  expect(deepequal.extended(new Qwer(), new Qwer(), { immerse: false })).toBe(
    true
  );
});
```

#### noweaks:

Methods WeakMap and WeakSet will always return false:

```js
test('WeakMap and WeakSet:', () => {
  const weakMap1 = new WeakMap([[{}, {}]]);
  const weakSet1 = new WeakSet([{}, {}]);

  const weakMap2 = new WeakMap([[{}, {}]]);
  const weakSet2 = new WeakSet([{}, {}]);

  expect(deepequal(weakMap1, weakMap2)).toBe(true);
  expect(deepequal.extended(weakMap1, weakMap2, { noweaks: false })).toBe(true);
  expect(deepequal.extended(weakMap1, weakMap2, { noweaks: true })).toBe(false);

  expect(deepequal(weakSet1, weakSet2)).toBe(true);
  expect(deepequal.extended(weakSet1, weakSet2, { noweaks: false })).toBe(true);
  expect(deepequal.extended(weakSet1, weakSet2, { noweaks: true })).toBe(false);

  weakMap.q = 1;
  weakSet.q = 1;

  expect(deepequal(weakMap, weakMap2)).toBe(false);
  expect(deepequal(weakSet, weakSet2)).toBe(false);
});
```

#### natives:

(Only if `immerse: true`). Take getters from native functions too. This should be used as a last resort. For example, to compare HTML-nodes (But that's a bad idea).

```js
expect(
  deepequal.extended(NODE1, NODE2, { immerse: true, natives: true })
).toBe(true);
```

## License

MIT
