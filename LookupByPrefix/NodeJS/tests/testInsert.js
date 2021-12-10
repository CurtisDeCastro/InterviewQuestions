const WordTrie = require('../classes/WordTrie.js');
const TestTrie = require('./TestTrie.js');
const log = require('./messages');

const insert = () => {
  log.insert.checking();
  TestTrie.insert("TestOne");
  let wordWasFound = TestTrie.contains("TestOne");
  if (wordWasFound){
    log.insert.success();
  } else {
    log.insert.failure();
  }
  TestTrie.remove("TestOne");
  return wordWasFound;
}

module.exports = insert;