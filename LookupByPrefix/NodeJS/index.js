var WordTrie = require('./classes/wordTrie.js');
var ExampleTrie = require('./tests/TestTrie.js');
var LargeDataset = require('./utilities/LargeDataset.js');
var test = require('./tests');

function runTests(prefs) {
  prefs.showLargeTrie ? test.logTrie(LargeDataset) : null;
  prefs.showExampleTrie ? test.logTrie(ExampleTrie) : null;
  prefs.quickValidate ? test.quickValidate() : null;
  prefs.testManyQueries ? test.testManyQueries(prefs) : null;
  prefs.testInsert ? test.testInsert() : null;
  prefs.testFind ? test.testFind() : null;
  prefs.testContains ? test.testContains() : null;
  prefs.testRemove ? test.testRemove() : null;
  Object.values(prefs.testManyQueries).includes(1 || true) ?
    test.testManyQueries(prefs.testManyQueries) :
    null;
}

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

runTests(testingPrefs);

