const TestTrie = require('./TestTrie.js');

const find = () => {
  console.log('Attempting to find a test string...');
  let findsAllWordsWithPrefix = TestTrie.find('c').length === 4;
  if (findsAllWordsWithPrefix){
    console.log('Search successful:: All expected results returned');
  } else {
    console.log('Search UNSUCCESSFUL:: Expected results NOT returned');
  };
  return findsAllWordsWithPrefix;
}

module.exports = find;