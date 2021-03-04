import { includes } from './index'

test('includes:', () => {
  expect(includes([1, 2, 3, 4, 5], 2)).toBe(true)
  expect(includes([1, 2, 3, 4, 5], 6)).toBe(false)

  expect(includes('asd', 'a')).toBe(true)
  expect(includes('asd', 'f')).toBe(false)
})
