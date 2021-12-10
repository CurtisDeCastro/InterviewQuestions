const TestTrie = require('./TestTrie.js');
const log = require('./messages');

const find = () => {
  log.find.checking();
  let findsAllWordsWithPrefix = TestTrie.find('c').length === 4;
  if (findsAllWordsWithPrefix){
    log.find.success();
  } else {
    log.find.failure();
  };
  return findsAllWordsWithPrefix;
}

module.exports = find;