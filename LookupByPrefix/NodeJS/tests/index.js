const testInsert = require('./testInsert.js');
const testRemove = require('./testRemove.js');
const testContains = require('./testContains.js');
const testFind = require('./testFind.js');

const validateAllMethods = () => {
  console.log('INSERTS A NEW WORD WHEN PROMPTED::', testInsert());
  console.log('REMOVES AN EXISTING WORD WHEN PROMPTED::', testRemove());
  console.log('FINDS EXPECTED WORDS AND DOES NOT FIND UNEXPECTED WORDS::', testContains());
  console.log('RETURNS ALL RESULTS FOR A GIVEN QUERY::',testFind());
}
module.exports = validateAllMethods;