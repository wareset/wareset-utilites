import toCapitalize from './toCapitalize'

test('toCapitalize:', () => {
  expect(toCapitalize('12345')).toBe('12345')
  expect(toCapitalize('ASD')).toBe('Asd')
  expect(toCapitalize('asd')).toBe('Asd')
  expect(toCapitalize('')).toBe('')
})
