# `@wareset-utilites/escape`

Escape regexp

# Usage

```js
import escape from '@wareset-utilites/escape';
```

##### Method: escape(string: String, ignoreSymbols: String, isNewFn: Boolean)

```js
const str = `{[()]}`;
console.log(escape(str)); // \\{\\[\\(\\)\\]\\}
console.log(escape(str, '{()}')); // {\\[()\\]}

// if exists 'ignoreSymbols' and 'isNewFn' is true:
const newEscape = escape(null, '{()}', true);
console.log(newEscape(str)); // {\\[()\\]}
```

## License

MIT
