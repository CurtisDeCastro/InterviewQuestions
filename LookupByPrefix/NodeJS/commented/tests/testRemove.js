// import example trie for testing
const TestTrie = require('./TestTrie.js');
// import console messages from message library
const log = require('./messages');

// function to test remove method of WordTrie class
const remove = () => {
  // log message to indicate start of test
  log.remove.checking();
  // insert a value into the test trie
  TestTrie.insert("TestOne");
  // remove the value from the test trie
  TestTrie.remove("TestOne");
  // instantiate alias variable that returns true if test value not found after removal
  const removalSuccess = !TestTrie.contains("TestOne");
  // if the removal was successful
  if (removalSuccess){
    // print a success message
    log.remove.success();
  // otherwise
  } else {
    // print a failure message
    log.remove.failure();;
  }
  // return boolean to indicate whether the test succeeded
  return removalSuccess;
}

// export the function
module.exports = remove;