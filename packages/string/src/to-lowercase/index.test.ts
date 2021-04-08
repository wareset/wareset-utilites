import { toLowercase } from './index'

test('toLowercase:', () => {
  expect(toLowercase('12345')).toBe('12345')
  expect(toLowercase('ASD')).toBe('asd')
  expect(toLowercase('asd')).toBe('asd')
  expect(toLowercase('')).toBe('')
})
