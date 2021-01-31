import esc from '../src'

test('wareset-utilites: escape', () => {
  expect(esc('+')).toBe('\\+')
  expect(esc('\\')).toBe('\\\\')
  expect(esc('\\', '')).toBe('\\\\')
  expect(esc('\\\\')).toBe('\\\\\\\\')
  expect(esc('\\+')).toBe('\\\\\\+')

  expect(esc('+\\', '+')).toBe('+\\\\')
  expect(esc('\\+', '+')).toBe('\\\\+')

  // TODO
  // expect(esc('+\\', '\\')).toBe('\\+\\')
  // expect(esc('\\+', '\\')).toBe('\\\\+')

  expect(esc('{|}')).toBe('\\{\\|\\}')
  expect(esc('{|}', '|')).toBe('\\{|\\}')
  expect(esc('{|}', '{}')).toBe('{\\|}')
  expect(esc('\\{|}', '{}')).toBe('\\\\{\\|}')

  expect(esc('[a-z]')).toBe('\\[a\\-z\\]')
  expect(esc('[a-z\\d\\s]', '-')).toBe('\\[a-z\\\\d\\\\s\\]')
  expect(esc('[a-z]', '-')).toBe('\\[a-z\\]')

  expect(esc('', '-', true)('[a-z]')).toBe('\\[a-z\\]')

  expect(esc('[\n]')).toBe('\\[\n\\]')
})
