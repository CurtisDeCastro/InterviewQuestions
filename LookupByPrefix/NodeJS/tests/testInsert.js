const WordTrie = require('../classes/WordTrie.js');
const TestTrie = require('./TestTrie.js');

const insert = () => {
  console.log('Attempting to insert a test string...');
  TestTrie.insert("TestOne");
  let wordWasFound = TestTrie.contains("TestOne");
  if (wordWasFound){
    console.log('Insertion Successful');
  } else {
    console.log('Insertion Unsuccessful');
  }
  TestTrie.remove("TestOne");
  return wordWasFound;
}

module.exports = insert;