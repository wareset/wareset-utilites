import { toCodeCamelcase } from './index'

test('toCodeCamelcase:', () => {
  expect(toCodeCamelcase('--foo-bar')).toBe('fooBar')
  expect(toCodeCamelcase('foo_bar++')).toBe('fooBar')
  expect(toCodeCamelcase('Foo-Bar//')).toBe('fooBar')
  expect(toCodeCamelcase('Foo-BAR')).toBe('fooBar')
  expect(toCodeCamelcase('%%fooBAR%%')).toBe('fooBar')
  expect(toCodeCamelcase('foo bar')).toBe('fooBar')
  expect(toCodeCamelcase('foo BAR')).toBe('fooBar')
  expect(toCodeCamelcase('FOO-Bar')).toBe('fooBar')
  expect(toCodeCamelcase('FOOBar')).toBe('fooBar')
})
