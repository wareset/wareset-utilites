import endsWith from './endsWith'

test('endsWith:', () => {
  expect(endsWith('1234', '4')).toBe(true)
  expect(endsWith('1234', '34')).toBe(true)
  expect(endsWith('1234', '234')).toBe(true)
  expect(endsWith('1234', '1234')).toBe(true)

  expect(endsWith('1234', '01234')).toBe(false)
  expect(endsWith('1234', '123')).toBe(false)

  expect(endsWith('1234', '4', 1)).toBe(false)

  expect(endsWith('1234', '23', 1)).toBe(true)
  expect(endsWith('1234', '12', 2)).toBe(true)
})
