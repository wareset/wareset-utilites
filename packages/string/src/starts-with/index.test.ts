import { startsWith } from './index'

test('startsWith:', () => {
  expect(startsWith('1234', '1')).toBe(true)
  expect(startsWith('1234', '12')).toBe(true)
  expect(startsWith('1234', '123')).toBe(true)
  expect(startsWith('1234', '1234')).toBe(true)

  expect(startsWith('1234', '12345')).toBe(false)
  expect(startsWith('1234', '234')).toBe(false)

  expect(startsWith('1234', '1', 1)).toBe(false)

  expect(startsWith('1234', '2', -1)).toBe(true)
  expect(startsWith('1234', '3', -2)).toBe(true)
  expect(startsWith('1234', '34', 2)).toBe(true)
})
