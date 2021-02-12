import { repeat } from './index'

test('repeat:', () => {
  expect(repeat('1', -2)).toBe('')
  expect(repeat('1', -1)).toBe('')
  expect(repeat('1', 0)).toBe('')
  expect(repeat('1', 1)).toBe('1')
  expect(repeat('1', 2)).toBe('11')

  expect(repeat('12', -2)).toBe('')
  expect(repeat('12', -1)).toBe('')
  expect(repeat('12', 0)).toBe('')
  expect(repeat('12', 1)).toBe('12')
  expect(repeat('12', 2)).toBe('1212')
})
