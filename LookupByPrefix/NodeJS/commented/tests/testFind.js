// import test trie and message library
const TestTrie = require('./TestTrie.js');
const log = require('./messages');

// define test find function
const find = () => {
  // log a message to indicate the start of the test
  log.find.checking();
  // declare alias variable for test results
  const test = TestTrie.find('c');
  // declare boolean alias variable that returns true if find method has returned expected results
  let findsAllWordsWithPrefix =
    test[0] === 'cat' &&
    test[1] === 'catch' &&
    test[2] === 'cattle' &&
    test[3] === 'cog'
  ;
  // if all results were found successfully
  if (findsAllWordsWithPrefix){
    // log a success message
    log.find.success();
  // otherwise
  } else {
    // log a failure message
    log.find.failure();
  };
  // return whether if found all expected results
  return findsAllWordsWithPrefix;
}

// export function
module.exports = find;