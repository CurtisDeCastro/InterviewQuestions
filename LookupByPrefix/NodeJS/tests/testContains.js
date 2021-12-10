const TestTrie = require('./TestTrie.js');

const contains = () => {
  console.log('Checking if test value present in TestTrie');
  TestTrie.insert("expectedValue");
  const findsExpected = TestTrie.contains("expectedValue");
  const findsNoUnexpected = !TestTrie.contains("anUnexpectedValue");
  if (findsExpected && findsNoUnexpected){
    console.log('Expected value returned and expected failure failed');
  } else if (findsExpected && !findsNoUnexpected){
    console.log('FAILURE: Expected value found but unexpected value not found');
  } else if (!findsExpected && findsNoUnexpected){
    console.log('FAILURE: Expected value not found, but no unexpected values were found');
  } else {
    console.log('FAILURE: Expected values not found and unexpected values were found');
  }
  TestTrie.remove("expectedValue");
  return findsExpected && findsNoUnexpected;
}

module.exports = contains;