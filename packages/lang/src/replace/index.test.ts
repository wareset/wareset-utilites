import { replace } from './index'

test('replace:', () => {
  expect(replace('asd', /s/)).toBe('ad')
  expect(replace('asd', /s/, 'w')).toBe('awd')
})
