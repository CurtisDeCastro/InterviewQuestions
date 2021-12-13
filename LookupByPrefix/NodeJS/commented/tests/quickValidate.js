// import test methods
const testInsert = require('./testInsert.js');
const testRemove = require('./testRemove.js');
const testContains = require('./testContains.js');
const testFind = require('./testFind.js');
// import message library
const log = require('./messages');

// define function to simultaneously run all test methods
const quickValidate = () => {
  // log results of each test function with its corresponding log message
  log.quickValidate.insert(testInsert());
  log.quickValidate.remove(testRemove());
  log.quickValidate.contains(testContains());
  log.quickValidate.find(testFind());
}

// export function
module.exports = quickValidate;