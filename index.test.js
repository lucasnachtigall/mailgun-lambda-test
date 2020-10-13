const { testfunc } = require('./');

test('pass test', () => {
  expect(testfunc()).toBe('passed');
});

test('fail test', () => {
  expect(testfunc()).toBe('failed');
});
