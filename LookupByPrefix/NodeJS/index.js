var util = require("util");
var WordTrie = require('./classes/wordTrie.js');
var validateAllMethods = require('./tests');
var testManyQueries = require('./tests/testManyQueries.js');
var testInsert = require('./tests/testInsert.js');
var testContains = require('./tests/testContains.js');
var testFind = require('./tests/testFind.js');
var testRemove = require('./tests/testRemove.js');
var ExampleTrie = require('./tests/TestTrie.js');
var LargeDataset = require('./utilities/LargeDataset.js');

function runTests(prefs) {
  const logTrie = (testTree) => {
    console.log(util.inspect(testTree, {showHidden: true, depth: null}));
  }
  prefs.showLargeTrie ? logTrie(LargeDataset) : null;
  prefs.showExampleTrie ? logTrie(ExampleTrie) : null;
  prefs.validateAllMethods ? validateAllMethods() : null;
  prefs.testManyQueries ? testManyQueries(prefs) : null;
  prefs.testInsert ? testInsert() : null;
  prefs.testFind ? testFind() : null;
  prefs.testContains ? testContains() : null;
  prefs.testRemove ? testRemove() : null;
  Object.values(prefs.testManyQueries).includes(1) ?
    testManyQueries(prefs.testManyQueries) :
    null;
}

const testingPrefs = {
  showLargeTrie: 1,
  showExampleTrie: 1,
  validateAllMethods: 1,
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

