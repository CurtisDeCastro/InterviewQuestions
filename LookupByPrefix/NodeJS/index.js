var WordTrie = require('./classes/wordTrie.js');
var ExampleTrie = require('./tests/TestTrie.js');
var LargeDataset = require('./utilities/LargeDataset.js');
var test = require('./tests');
var preset = require('./utilities/presets.js');

function runTests(prefs) {
  const start = new Date();
  let doNothing = null;
  prefs.showLargeTrie ? test.logTrie(LargeDataset) : doNothing;
  prefs.showExampleTrie ? test.logTrie(ExampleTrie) : doNothing;
  prefs.quickValidate ? test.quickValidate() : doNothing;
  prefs.testManyQueries ? test.testManyQueries(prefs) : doNothing;
  prefs.testInsert ? test.testInsert() : doNothing;
  prefs.testFind ? test.testFind() : doNothing;
  prefs.testContains ? test.testContains() : doNothing;
  prefs.testRemove ? test.testRemove() : doNothing;
  Object.values(prefs.testManyQueries).includes(1 || true) ?
    test.testManyQueries(prefs.testManyQueries) :
    doNothing;
  const end = new Date();
  test.log.general.timestamp(start, end);
}

const testingPrefs = {
  showLargeTrie: 0,
  showExampleTrie: 0,
  quickValidate: 0,
  testInsert: 0,
  testContains: 0,
  testFind: 1,
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

