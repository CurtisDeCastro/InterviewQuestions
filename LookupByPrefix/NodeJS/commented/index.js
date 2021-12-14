// import WrodTrie class, example trie and large dataset for testing, and testing functions from testing library
var WordTrie = require('./classes/wordTrie.js');
var ExampleTrie = require('./tests/TestTrie.js');
var LargeDataset = require('./utilities/LargeDataset.js');
var test = require('./tests');
var preset = require('./utilities/presets.js');

function runTests(prefs) {
  // declare start variable to start timer
  const start = new Date();
  // declare alias for readability
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

  // record end time
  const end = new Date();
  // log a message with the total execution time
  test.log.general.timestamp(start, end);
}
// toggle which tests to run by indicating 1/true or 0/false
const testingPrefs = {
  showLargeTrie: 0,
  showExampleTrie: 0,
  quickValidate: 0,
  testInsert: 0,
  testContains: 0,
  testFind: 0,
  testRemove: 0,
  testManyQueries: {
    insert: 0,
    contains: 0,
    find: 0,
    remove: 0,
  },
}

// execute the tests by either 1) indicating which tests to run in the testingPrefs object above, then passing 0 to the IIFE below, or 2) by passing 1 to the IIFE below to run all tests
const ENTER_PRESET_BELOW = ((i) => {
  i === 0 ? runTests(testingPrefs) : null;
  i === 1 ? runTests(preset.All) : null;
})(0);
// enter preset into parenthesis at end of line directly above

