const TestLRUCache = require('../util/TestLRUCache.js');
const log = require('./messages');

const get = () => {
  log.get.checking();
  const oldValue = TestLRUCache.get(1492);
  TestLRUCache.put(1492, 90215);
  const newValue = TestLRUCache.get(1492);
  const getSuccess = newValue === 90215 && newValue !== oldValue;
  if (getSuccess){
    log.get.success();
  } else {
    log.get.failure();;
  }
  TestLRUCache.put(1492, oldValue);
  return getSuccess;
}

module.exports = get;