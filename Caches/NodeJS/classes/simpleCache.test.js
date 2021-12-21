const Cache = require('./simpleCache.js');

test('Adds a value to the cache', () => {
  const testCache = new Cache();
  testCache.insert('curtis', 28);
  expect(testCache.get('curtis')).toBe(28);
})