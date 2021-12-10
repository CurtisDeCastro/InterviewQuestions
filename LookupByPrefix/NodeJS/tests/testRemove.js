const TestTrie = require('./TestTrie.js');
const log = require('./messages');

const remove = () => {
  log.remove.checking();
  TestTrie.insert("TestOne");
  TestTrie.remove("TestOne");
  const removalSuccess = !TestTrie.contains("TestOne");
  if (removalSuccess){
    log.remove.success();
  } else {
    log.remove.failure();;
  }
  return removalSuccess;
}

module.exports = remove;