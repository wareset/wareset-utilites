import { toCodeKebabcase } from './index'

test('toCodeKebabcase:', () => {
  expect(toCodeKebabcase('--foo-bar')).toBe('foo-bar')
  expect(toCodeKebabcase('foo_bar++')).toBe('foo-bar')
  expect(toCodeKebabcase('Foo-Bar//')).toBe('foo-bar')
  expect(toCodeKebabcase('Foo-BAR')).toBe('foo-bar')
  expect(toCodeKebabcase('%%fooBAR%%')).toBe('foo-bar')
  expect(toCodeKebabcase('foo bar')).toBe('foo-bar')
  expect(toCodeKebabcase('foo BAR')).toBe('foo-bar')
  expect(toCodeKebabcase('FOO-Bar')).toBe('foo-bar')
  expect(toCodeKebabcase('FOOBar')).toBe('foo-bar')
})
