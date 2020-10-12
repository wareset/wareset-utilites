# `@wareset-utilites/unique`

Array filter

## Installation

```bash
npm i @wareset-utilites/unique
```

or

```bash
yarn add @wareset-utilites/unique
```

## Usage

### Require or Import:

```js
const unique = require('@wareset-utilites/unique');
// or
import unique from '@wareset-utilites/unique';
```

#### Mathod: unique.bind(filter: [] = ['', null, undefined])

```js
let arr = [0, 1, 2, 3, 1, 2, 3, '', null, undefined];

console.log(arr.filter(unique)), /* OR */ console.log(unique(arr));
/* RETURN: */ [0, 1, 2, 3];

// because filter (bind) by default ['', null, undefined];

console.log(arr.filter(unique.bind([1, 2])));
/* RETURN: */ [0, 3, '', null, undefined];

arr = ['foo', 'bar', 'baz'];

console.log(arr.filter(unique.bind([/^ba/])));
/* RETURN: */ ['foo'];
```

## License

MIT
