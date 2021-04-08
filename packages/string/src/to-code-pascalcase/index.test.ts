import { toCodePascalcase } from './index'

test('toCodePascalcase:', () => {
  expect(toCodePascalcase('--foo-bar9mqWER')).toBe('FooBar9mqWer')
  expect(toCodePascalcase('foo_bar++')).toBe('FooBar')
  expect(toCodePascalcase('Foo-Bar//')).toBe('FooBar')
  expect(toCodePascalcase('Foo-BAR')).toBe('FooBar')
  expect(toCodePascalcase('%%fooBAR%%')).toBe('FooBar')
  expect(toCodePascalcase('foo bar')).toBe('FooBar')
  expect(toCodePascalcase('foo BAR')).toBe('FooBar')
  expect(toCodePascalcase('FOO-Bar')).toBe('FooBar')
  expect(toCodePascalcase('FOOBar')).toBe('FooBar')
})
