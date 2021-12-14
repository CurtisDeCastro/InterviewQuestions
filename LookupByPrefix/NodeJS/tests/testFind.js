const TestTrie = require('./TestTrie.js');
const log = require('./messages');

const find = () => {
  log.find.checking();
  const test = TestTrie.find('c');
  let findsAllWordsWithPrefix =
    test[0] === 'cat' &&
    test[1] === 'catch' &&
    test[2] === 'cattle' &&
    test[3] === 'cog'
  ;
  if (findsAllWordsWithPrefix){
    log.find.success();
  } else {
    log.find.failure();
  };
  return findsAllWordsWithPrefix;
}

module.exports = find;