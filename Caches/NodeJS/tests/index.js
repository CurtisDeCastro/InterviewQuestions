var quickValidate = require('./quickValidate.js');
var testGet = require('./testGet.js');
var testPut = require('./testPut.js');
var testManyQueries = require('./testManyQueries.js');
var logCache = require('./logCache.js');
var TestLRUCache = require('../util/TestLRUCache.js');
var log = require('./messages');

module.exports = {
  quickValidate,
  logCache,
  testGet,
  testPut,
  testManyQueries,
  TestLRUCache,
  log,
}