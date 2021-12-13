// import testTrie and message library
const TestTrie = require('./TestTrie.js');
const log = require('./messages');

// define contains method as function
const contains = () => {
  // log message to indicate start of test
  log.contains.checking();
  // insert a value into the trie
  TestTrie.insert("expectedValue");
  // assign boolean variable to return whether the test trie contains the expected value
  const findsExpected = TestTrie.contains("expectedValue");
  // assign boolean variable to return whether the contains method returns true when an uninserted value is searched
  const findsNoUnexpected = !TestTrie.contains("anUnexpectedValue");
  // if it finds the expected value and does not return true when an unexpected value is searched
  if (findsExpected && findsNoUnexpected){
    // log a success message
    log.contains.success();
  // otherwise if it finds an expected value but also returns true when it shouldn't
  } else if (findsExpected && !findsNoUnexpected){
    // log a message to indicate as such
    log.contains.failure1();
  // otherwise if it does not find the unexpected value and it returns true when it shouldn't
  } else if (!findsExpected && findsNoUnexpected){
    // log a message to indicate as such
    log.contains.failure2();
  // otherwise it has failed to find the expected value
  } else {
    // log a message to indicate that it is completely broken
    log.contains.failure3();
  }
  // remove the inserted value from the testTrie
  TestTrie.remove("expectedValue");
  // return true if process works as expected
  return findsExpected && findsNoUnexpected;
}

// export function
module.exports = contains;