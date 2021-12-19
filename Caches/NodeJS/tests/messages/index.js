const util = require('../../util');

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
  getSuccess: (orderN, paramArr, val) => {console.log(util.fillLine(`#${orderN} Value "${val}"`,26),util.fillLine(`Returned from Key "${paramArr[orderN]}"`,28),`in LRU Cache`)},
  getFailure: (orderN, paramArr) => {console.log(util.fillLine(`#${orderN} Value "${paramArr[orderN]}"`,45),'Not Found in LRU Cache')},
  put: (orderN, paramArr) => {console.log(util.fillLine(`#${orderN} assigning value ${paramArr[orderN][1]} to key ${paramArr[orderN][0]} in LRU Cache`,71))},
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