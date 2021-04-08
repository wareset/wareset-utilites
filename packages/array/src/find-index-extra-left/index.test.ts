import { findIndexExtraLeft } from './index'

test('findIndexExtraLeft:', () => {
  expect(findIndexExtraLeft([1, 2, 3, 4, 5], (v) => v > 2)).toBe(2)
  expect(findIndexExtraLeft([1, 2, 3, 4, 5], (v) => v > 5)).toBe(-1)
})
