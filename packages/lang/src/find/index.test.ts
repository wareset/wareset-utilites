import { find } from './index'

test('find:', () => {
  expect(find([1, 2, 3, 4, 5], (v) => v > 2)).toBe(3)
  expect(find([1, 2, 3, 4, 5], (v) => v > 5)).toBe(undefined)
})
