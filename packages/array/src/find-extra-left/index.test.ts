import { findExtraLeft } from './index'

test('findExtraLeft:', () => {
  expect(findExtraLeft([1, 2, 3, 4, 5], (v) => v > 2)).toBe(3)
  expect(findExtraLeft([1, 2, 3, 4, 5], (v) => v > 5)).toBe(undefined)
})
