import { findIndex } from './index'

test('findIndex:', () => {
  expect(findIndex([1, 2, 3, 4, 5], (v) => v > 2)).toBe(2)
  expect(findIndex([1, 2, 3, 4, 5], (v) => v > 5)).toBe(-1)
})
