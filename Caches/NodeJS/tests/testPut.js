const TestLRUCache = require('../util/TestLRUCache.js');
const log = require('./messages');

const put = () => {
  log.put.checking();
  TestLRUCache.put(1492, 240);
  TestLRUCache.put(240, 1492);
  TestLRUCache.put(1492, 962);
  TestLRUCache.put(1492, 90210);
  const putsValuesCorrectly = TestLRUCache.get(1492) === 90210;
  if (putsValuesCorrectly){
    log.put.success();
  } else {
    log.put.failure();
  };
  return putsValuesCorrectly;
}

module.exports = put;