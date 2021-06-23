import padStart from './padStart'

test('padStart:', () => {
  expect(padStart('12345', 10, '')).toBe('12345')
  expect(padStart('12345', 3)).toBe('12345')
  expect(padStart('12345', 5)).toBe('12345')
  expect(padStart('12345', 10)).toBe('     12345')
  expect(padStart('12345', 10, '6')).toBe('6666612345')
  expect(padStart('12345', 10, '67')).toBe('6767612345')
  expect(padStart('12345', 10, '678')).toBe('6786712345')
  expect(padStart('12345', 10, '6789')).toBe('6789612345')
  expect(padStart('12345', 10, '67890')).toBe('6789012345')
  expect(padStart('12345', 10, '678900')).toBe('6789012345')
})
