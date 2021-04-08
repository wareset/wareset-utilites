import { toUppercase } from './index'

test('toUppercase:', () => {
  expect(toUppercase('12345')).toBe('12345')
  expect(toUppercase('ASD')).toBe('ASD')
  expect(toUppercase('asd')).toBe('ASD')
  expect(toUppercase('')).toBe('')
})
