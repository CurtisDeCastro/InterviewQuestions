// import all tests
var quickValidate = require('./quickValidate.js');
var logTrie = require('./logTrie.js');
var testManyQueries = require('./testManyQueries.js');
var testInsert = require('./testInsert.js');
var testContains = require('./testContains.js');
var testFind = require('./testFind.js');
var testRemove = require('./testRemove.js');
var logTrie = require('./logTrie.js');
var TestTrie = require('./TestTrie.js');

// export all tests
module.exports = {
  quickValidate,
  logTrie,
  testManyQueries,
  testInsert,
  testContains,
  testFind,
  testRemove,
  TestTrie,
}