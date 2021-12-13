const TestTrie = require('./TestTrie.js');
const log = require('./messages');

const contains = () => {
  log.contains.checking();
  TestTrie.insert("expectedValue");
  const findsExpected = TestTrie.contains("expectedValue");
  const findsNoUnexpected = !TestTrie.contains("anUnexpectedValue");
  if (findsExpected && findsNoUnexpected){
    log.contains.success();
  } else if (findsExpected && !findsNoUnexpected){
    log.contains.failure1();
  } else if (!findsExpected && findsNoUnexpected){
    log.contains.failure2();
  } else {
    log.contains.failure3();
  }
  TestTrie.remove("expectedValue");
  return findsExpected && findsNoUnexpected;
}

module.exports = contains;