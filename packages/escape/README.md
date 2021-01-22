# `@wareset-utilites/escape`

Escape regexp

# Usage

```js
import esc from '@wareset-utilites/escape';
```

##### Method: escape(string: String, ignoreSymbols: String, isNewFn: Boolean)

```js
const str = `{[()]}`;
console.log(esc(str)); // \\{\\[\\(\\)\\]\\}
console.log(esc(str, '{()}')); // {\\[()\\]}

// if exists 'ignoreSymbols' and 'isNewFn' is true:
const newEsc = esc(null, '{()}', true);
console.log(newEsc(str)); // {\\[()\\]}
```

## License

MIT
