var LRUCache = require('./classes/LRUCache.js');
var TestLRUCache = require('./util').TestLRUCache;
var test = require('./tests');
var util = require('./util');

function runTests(prefs) {
  console.time('Full Test-Suite Runtime');
  let doNothing = null;
  prefs.testManyQueries ? test.testManyQueries(util.funcs, util.params, prefs.querySize) : doNothing;
  prefs.showTestLRUCache ? test.logCache(TestLRUCache) : doNothing;
  prefs.quickValidate ? test.quickValidate() : doNothing;
  prefs.testGet ? test.testGet() : doNothing;
  prefs.testPut ? test.testPut() : doNothing;
  console.timeEnd('Full Test-Suite Runtime');
}

const testingPrefs = {
  testManyQueries: 0,
  showTestLRUCache: 1,
  quickValidate: 1,
  testGet: 1,
  testPut: 1,
  querySize: {
    numResults: 200000,
    startInd: 0,
  }
}

// execute the tests by either 1) indicating which tests to run in the testingPrefs object above, then passing 0 to the IIFE below, or 2) by passing 1 to the IIFE below to run all tests
const ENTER_PRESET_ON_LINE_33 = ((i) => {
  const {All, onlyGet, onlyPut} = util.presets;
  i === 0 ? runTests(testingPrefs) : null;
  i === 1 ? runTests(All) : null;
  i === 2 ? runTests(onlyGet) : null;
  i === 3 ? runTests(onlyPut) : null;
})(2);
// enter preset into parenthesis at end of line directly above