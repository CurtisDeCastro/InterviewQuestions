const testInsert = require('./testInsert.js');
const testRemove = require('./testRemove.js');
const testContains = require('./testContains.js');
const testFind = require('./testFind.js');
const log = require('./messages');

const quickValidate = () => {
  log.quickValidate.insert(testInsert());
  log.quickValidate.remove(testRemove());
  log.quickValidate.contains(testContains());
  log.quickValidate.find(testFind());
}
module.exports = quickValidate;