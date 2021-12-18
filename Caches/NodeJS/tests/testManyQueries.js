const funcs = require('../util/funcs.js');
const params = require('../util/params.js');
const LRUCache = require('../classes/LRUCache.js');
var util = require('../util');
var log = require('./messages');

const testManyQueries = (funcArr, paramArr, prefs) => {
  console.time(`Tested All Values in:`);
  const doNothing = null;
  const testCache = new LRUCache(paramArr[0]);
  funcArr.shift();
  paramArr.shift();
  let tests = [];
  funcArr.map((func, i) => {
    if (func === "put") {
      const insertValue = testCache.put(paramArr[i][0],paramArr[i][1]);
      tests.push(insertValue);
    }
    if (func === "get") {
      const retrievalValue = testCache.get(paramArr[i][0]);
      tests.push(retrievalValue);
    }
  })
  let numResults, startInd;
  prefs.numResults ?
    numResults = prefs.numResults :
    numResults = 5000;
  prefs.startInd ?
    startInd = prefs.startInd :
    startInd = 0;
  const endInd = startInd + numResults;
  const testBlock = tests.slice(startInd, startInd+numResults);
  let orderNum = 0;
  testBlock.forEach((value, i) => {
    const orderNumber = startInd + i;
    if (i === testBlock.length-1){
      orderNum = paramArr[orderNumber][0]
    }
    value === undefined ?
      console.log(util.fillLine(`#${orderNumber} assigning value ${paramArr[orderNumber][1]} to key ${paramArr[orderNumber][0]} in LRU Cache`,71)) :
      value === -1 ?
      console.log(util.fillLine(`#${orderNumber} Value "${paramArr[orderNumber]}"`,45),'Not Found in LRU Cache') :
      console.log(util.fillLine(`#${orderNumber} Value "${value}"`,26),util.fillLine(`Returned from Key "${paramArr[orderNumber]}"`,28),`in LRU Cache`);
  });
  console.log('TEST:: Key:',orderNum,'Returns:',testCache.get(orderNum));
  console.timeEnd(`Tested All Values in:`);
  return tests;
};

module.exports = testManyQueries;