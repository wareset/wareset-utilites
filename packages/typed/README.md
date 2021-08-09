# `@wareset-utilites/typed`

He can return the constructor, return the entire chain of constructors, check the availability of constructors.

### Attention:

##### <=0.1.1

Version <=0.1.1 returns the prototypes and not the constructors!

##### >=0.3.0

Starting with the >=0.3.0 version, returns the prototype and the constructor (if object has been created like `Object.create({ q: 1 })`, returns prototype `{ q: 1 }`)!.

## Installation

```bash
npm i @wareset-utilites/typed ## yarn add @wareset-utilites/typed
```

## Usage

### Import:

```js
import typed from '@wareset-utilites/typed'
```

### Method: `typed(value)` and `typed.of(value)`

```typescript
declare function typed(value: any): Function | object | null | undefined
declare function typedOf(
  value: any
): Array<Function | object | null | undefined>
```

Returns prototype:

```js
expect(typed(undefined)).toBe(undefined)
expect(typed.of(undefined)).toEqual([undefined])

expect(typed(null)).toBe(null)
expect(typed.of(null)).toEqual([null])

const boolean = true
expect(typed(boolean)).toBe(Boolean)
expect(typed.of(boolean)).toEqual([Boolean, Object])

const symbol = Symbol('1')
expect(typed(symbol)).toBe(Symbol)
expect(typed.of(symbol)).toEqual([Symbol, Object])

const number = 304010
expect(typed(number)).toBe(Number)
expect(typed.of(number)).toEqual([Number, Object])

const dataView = new DataView(new ArrayBuffer(16))
expect(typed(dataView)).toBe(DataView)
expect(typed.of(dataView)).toEqual([DataView, Object])

expect(typed(() => {})).toBe(Function)
expect(typed.of(() => {})).toEqual([Function, Object])

const AsyncFunction = (async () => {}).constructor
expect(typed(async () => {})).toBe(AsyncFunction)
expect(typed.of(async () => {})).toEqual([AsyncFunction, Function, Object])
// etc...

test('Class:', () => {
  class Qwer {}
  class Wert extends Qwer {}
  class Erty extends Wert {}

  const newClass = new Erty()
  expect(typed(newClass)).toBe(Erty)
  expect(typed.of(newClass)).toEqual([Erty, Wert, Qwer, Object])
})

test('DIV:', () => {
  const div = document.createElement('div')
  expect(typed(div)).toBe(HTMLDivElement)
  expect(typed.of(div)).toEqual([
    HTMLDivElement,
    HTMLElement,
    Element,
    Node,
    EventTarget,
    Object
  ])
})
// etc...

// Object:
const proto = { q: 1 }
const object = Object.create(proto)
expect(typed(object)).toBe(proto)
expect(typed.of(object)).toEqual([{ q: 1 }, Object])

const object2 = Object.create(object)
expect(typed(object2)).toEqual({})
expect(typed.of(object2)).toEqual([{}, { q: 1 }, Object])

const proto2 = [1, 2, 3]
const object3 = Object.create(proto2)
expect(typed(object3)).toBe(proto2)
expect(typed.of(object3)).toEqual([[1, 2, 3], Array, Object])

const object4 = Object.create(object3)
expect(typed(object4)).toBe(object3)
expect(typed.of(object4)).toEqual([{}, [1, 2, 3], Array, Object])
```

### Methods: `typedOf(value, ...types)` and `typed.of(value, ...types)`

```typescript
declare function typed(
  value: any,
  ...types: Array<Function | object | null | undefined>
): boolean
declare function typedOf(
  value: any,
  ...types: Array<Function | object | null | undefined>
): boolean
```

Check the availability of prototypes:

```js
expect(typed(Infinity, Number)).toBe(true) // Number
expect(typed(Infinity, Number, String)).toBe(true) // Number
expect(typed(Infinity, String)).toBe(false)
expect(typed(Infinity, Array, String)).toBe(false)

expect(typed.of(Infinity, Object, Array, String)).toBe(true) // Object
expect(typed.of(Infinity, undefined, Array, String)).toBe(false)

// other
const someFn = () => {}
const someFnAsync = async () => {}

console.log(typed(someFn, Function)) // true
console.log(typed(someFn, () => {})) // true
console.log(typed.of(someFnAsync, someFn)) // true
console.log(typed.of(someFn, someFnAsync)) // false
console.log(typed(someFnAsync, someFn)) // false
console.log(typed(someFn, someFnAsync)) // false
// etc...
```

### Methods: `typed.try(value, ...types)` and `typed.of.try(value, ...types)`

Check the availability of prototypes:

```js
console.log(typed.try(9999)) // RETURN: 9999
console.log(typed.of.try(9999)) // RETURN: 9999

console.log(typed.try(9999, Number)) // RETURN: 9999
console.log(typed.of.try(9999, [String, Object])) // RETURN: 9999

console.log(typed.try(9999, String)) // throw new Error()
console.log(typed.of.try(9999, [String, Node])) // throw new Error()
```

## License

MIT
