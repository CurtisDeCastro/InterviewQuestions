const testGet = require('./testGet.js');
const testPut = require('./testPut.js');
const log = require('./messages');

const quickValidate = () => {
  log.quickValidate.get(testGet());
  log.quickValidate.put(testPut());
}

module.exports = quickValidate;