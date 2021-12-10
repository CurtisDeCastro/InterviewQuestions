const TestTrie = require('./TestTrie.js');

const remove = () => {
  console.log('Attempting removal of test value');
  TestTrie.insert("TestOne");
  TestTrie.remove("TestOne");
  const removalSuccess = !TestTrie.contains("TestOne");
  if (removalSuccess){
    console.log('SUCCESS: Inserted value was removed');
  } else {
    console.log('FAILURE: Inserted value was not removed');
  }
  return removalSuccess;
}

module.exports = remove;