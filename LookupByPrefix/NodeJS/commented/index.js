// import WrodTrie class, example trie and large dataset for testing, and testing functions from testing library
var WordTrie = require('./classes/wordTrie.js');
var ExampleTrie = require('./tests/TestTrie.js');
var LargeDataset = require('./utilities/LargeDataset.js');
var test = require('./tests');

function runTests(prefs) {
  let doNothing = null;
  // console log result of inserting every word in Art of War into a trie
  prefs.showLargeTrie ? test.logTrie(LargeDataset) : doNothing;
  // console log a small trie with example words added
  prefs.showExampleTrie ? test.logTrie(ExampleTrie) : doNothing;
  // test each method of trie once and log results
  prefs.quickValidate ? test.quickValidate() : doNothing;
  // run ~100 tests for each method and log their individual results
  prefs.testManyQueries ? test.testManyQueries(prefs) : doNothing;
  // test insert method and log results
  prefs.testInsert ? test.testInsert() : doNothing;
  // test find method and log results
  prefs.testFind ? test.testFind() : doNothing;
  // test contains method and log results;
  prefs.testContains ? test.testContains() : doNothing;
  // test remove method and log results;
  prefs.testRemove ? test.testRemove() : doNothing;
  // run ~100 tests for any of the methods which are toggled in prefs (below)
  Object.values(prefs.testManyQueries).includes(1 || true) ?
    test.testManyQueries(prefs.testManyQueries) :
    null;
}
// toggle which tests to run by indicating 1/true or 0/false
const testingPrefs = {
  showLargeTrie: 1,
  showExampleTrie: 1,
  quickValidate: 1,
  testInsert: 1,
  testContains: 1,
  testFind: 1,
  testRemove: 1,
  testManyQueries: {
    insert: 1,
    contains: 1,
    find: 1,
    remove: 1,
  },
}

// execute function by passing in testing preferences
runTests(testingPrefs);

