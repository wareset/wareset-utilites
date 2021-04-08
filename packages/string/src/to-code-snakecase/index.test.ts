import { toCodeSnakecase } from './index'

test('toCodeSnakecase:', () => {
  expect(toCodeSnakecase('--foo-bar')).toBe('foo_bar')
  expect(toCodeSnakecase('foo_bar++')).toBe('foo_bar')
  expect(toCodeSnakecase('Foo-Bar//')).toBe('foo_bar')
  expect(toCodeSnakecase('Foo-BAR')).toBe('foo_bar')
  expect(toCodeSnakecase('%%fooBAR%%')).toBe('foo_bar')
  expect(toCodeSnakecase('foo bar')).toBe('foo_bar')
  expect(toCodeSnakecase('foo BAR')).toBe('foo_bar')
  expect(toCodeSnakecase('FOO-Bar')).toBe('foo_bar')
  expect(toCodeSnakecase('FOOBar')).toBe('foo_bar')
})
