import last from './last'

test('last:', () => {
  expect(last([1, 2, 3, 4, 5])).toBe(5)
  expect(last([1, 2, 3, 4, 5], 2)).toBe(3)
  expect(last([1, 2, 3, 4, 5], 5)).toBe(void 0)
})
