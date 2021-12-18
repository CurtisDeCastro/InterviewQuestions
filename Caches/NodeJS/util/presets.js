// all options toggled
const All = {
  testManyQueries: 1,
  showTestLRUCache: 1,
  quickValidate: 1,
  testGet: 1,
  testPut: 1,
  querySize: {
    numResults: 200000,
    startInd: 0,
  }
}

const onlyGet = {
  testManyQueries: 1,
  showTestLRUCache: 0,
  quickValidate: 0,
  testGet: 1,
  testPut: 0,
  querySize: {
    numResults: 99999,
    startInd: 100000,
  }
}

const onlyPut = {
  testManyQueries: 1,
  showTestLRUCache: 0,
  quickValidate: 0,
  testGet: 0,
  testPut: 1,
  querySize: {
    numResults: 99999,
    startInd: 0,
  }
}


module.exports = {
  All,
  onlyGet,
  onlyPut
}