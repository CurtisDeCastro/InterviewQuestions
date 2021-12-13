// import the small test trie and message library
const TestTrie = require('./TestTrie.js');
const log = require('./messages');

// create function to test insert method
const insert = () => {
  // log a message to indicate start of test
  log.insert.checking();
  // insert a test value into the trie
  TestTrie.insert("TestOne");
  // declare alias boolean variable to indicate whether the trie contains the inserted test value
  let wordWasFound = TestTrie.contains("TestOne");
  // if the word was found
  if (wordWasFound){
    // log a success message to the console
    log.insert.success();
  // otherwise
  } else {
    // log a failure message to the console
    log.insert.failure();
  }
  // remove the value from the test trie
  TestTrie.remove("TestOne");
  // return whether or not the word was found
  return wordWasFound;
}

// export the function
module.exports = insert;