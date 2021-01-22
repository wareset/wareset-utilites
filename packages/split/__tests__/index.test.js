const safesplit = require('../dist/index').default;

test('CSV:', () => {
  const res = [
    ['q1', 'q2', 'q3', 'q4'],
    ['w1', 'w2', '"w3,  w3-1,w3-2"', 'w4'],
    ['e1', 'e2', '`e3, e3-1, e3-2`', 'e4'],
    ['r1', 'r2', "'r3, r3-1, r3-2'", 'r4']
  ];

  const csv = `
q1, q2 ,      q3,           q4
w1, w2, "w3,  w3-1,w3-2",   w4
e1, e2 , \`e3, e3-1, e3-2\`,e4
r1, r2, 'r3, r3-1, r3-2',   r4
`.trim();

  expect(csv.split('\n').map((v) => safesplit(v))).toEqual(res);
  expect(csv.split('\n').map((v) => safesplit(v, /\s*(,)\s*/))).toEqual(res);

  const csv2 = `
q1  q2       q3,           q4
w1  w2, "w3,  w3-1,w3-2"   w4
e1, e2  \`e3, e3-1, e3-2\`,e4
r1, r2, 'r3, r3-1, r3-2'   r4
`.trim();

  expect(csv2.split('\n').map((v) => safesplit(v, /\s*[,\s]\s*/))).toEqual(res);

  const csv3 = `
q1, q2, q3, q4'4, q5\`5, q6"6
`.trim();

  expect(
    safesplit(csv3, /\s*[,\s]\s*/, '', '', {
      safeSingleQuotes: true
    })
  ).toEqual(['q1', 'q2', 'q3', "q4'4", 'q5`5', 'q6"6']);

  const csv4 = `
q1, "q2, q3", q4'4, q5\`5, q6"6
`.trim();

  expect(
    safesplit(csv4, /\s*[,\s]\s*/, '', '', {
      safeSingleQuotes: true,
      addRuleForQuotes: true
    })
  ).toEqual(['q1', '"q2, q3"', "q4'4", 'q5`5', 'q6"6']);

  const csv5 = `
q1, "q2, q3, q4'4, q5\`5, q6"6
`.trim();

  expect(
    safesplit(csv5, /\s*[,\s]\s*/, '', '', {
      safeSingleQuotes: true,
      addRuleForQuotes: true,
      strict: false
    })
  ).toEqual(['q1', '"q2, q3, q4\'4, q5`5, q6"6']);
});

test('Concise:', () => {
  const concise = `
div(class="button",
  style="color: red",
  data="{ q1: 1, q2: testFn() }")

  mixin testMixin[
    { ...someData }
  ]

  span(class="button__ripple")
    span
 
  if(iconBefore): span.button__icon-before -- {
    iconBefore === 'menu' ? defaultIconMenu : iconBefore }

  span.button__text -- textContent

  if(iconAfter)
    span(class="button__icon-after") -- {iconAfter}
`;

  const res = [
    '',
    'div(class="button",\n  style="color: red",\n  data="{ q1: 1, q2: testFn() }")',
    '',
    '  mixin testMixin[\n    { ...someData }\n  ]',
    '',
    '  span(class="button__ripple")',
    '    span',
    ' ',
    "  if(iconBefore): span.button__icon-before -- {\n    iconBefore === 'menu' ? defaultIconMenu : iconBefore }",
    '',
    '  span.button__text -- textContent',
    '',
    '  if(iconAfter)',
    '    span(class="button__icon-after") -- {iconAfter}',
    ''
  ];

  expect(
    safesplit(concise, '\n', /\(|\{|\[/, /\)|\}|\]/, {
      addRuleForQuotes: true
    })
  ).toEqual(res);
});

test('Attrs:', () => {
  const attrs = `
  class="cl1 cl2", content="What's your name" style="color: red",
  arr1=" [1, 2, 3] ", arr2=[1, 2, 3], arr3={[1, 2, 3]}
  obj={{
    q1: 1,
    q2: 2
  }}
  `;

  const res = [
    '',
    'class="cl1 cl2"',
    'content="What\'s your name"',
    'style="color: red"',
    'arr1=" [1, 2, 3] "',
    'arr2=[1, 2, 3]',
    'arr3={[1, 2, 3]}',
    'obj={{\n    q1: 1,\n    q2: 2\n  }}',
    ''
  ];

  expect(safesplit(attrs, /(,|\s|\n)+/, /\{|\[/, /\}|\]/)).toEqual(res);
});
