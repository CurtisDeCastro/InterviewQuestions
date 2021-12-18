
const quickValidate = {
  get: (testGet) => {console.log('GETS A PREVIOUSLY ADDED VALUE WHEN PROMPTED::', testGet)},
  put: (testPut) => {console.log('REMOVES AN EXISTING WORD WHEN PROMPTED::', testPut)},
}

const get = {
  checking: () => {console.log('Checking if test value present in LRU Cache...')},
  success: () => {console.log('SUCCESS:: ')},
  failure: () => {console.log('FAILURE:: ')},
}

const put = {
  checking: () => {console.log('Attempting to insert a test value in LRU Cache...')},
  success: () => {console.log('SUCCESS:: Value was added successfully to LRU Cache!')},
  failure: () => {console.log('FAILURE:: Value may have been added, but LRU Cache state differs from expected.')},
}

const manyQueries = {
  get: (val, bool) => {`Test LRU Cache contains previously inserted value "${val}"? `,bool},
  put: (random, wasInserted) => {console.log(`Random value "${random}" was inserted?`,wasInserted)},
}

const general = {
  timestamp: (start, end) => {
    console.log(`~~~All tests run in ${end-start} milliseconds~~~`);
  }
}

module.exports = {
  quickValidate,
  get,
  put,
  manyQueries,
  general,
}