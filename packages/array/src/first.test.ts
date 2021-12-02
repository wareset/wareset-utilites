import first from './first'

test('first:', () => {
  expect(first([1, 2, 3, 4, 5])).toBe(1)
  expect(first([1, 2, 3, 4, 5], 2)).toBe(3)
  expect(first([1, 2, 3, 4, 5], 5)).toBe(void 0)
})
