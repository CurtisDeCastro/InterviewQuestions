const LRUCache = require('../classes/LRUCache.js');
const funcs = require('./funcs.js');
const params = require('./params.js');

const TestLRUCache = ((funcArr, paramArr) => {
  let testCache = new LRUCache(paramArr[0]);
  funcArr.shift();
  paramArr.shift();
  funcArr.map((func, i) => {
    func === "put" ?
      testCache.put(paramArr[i][0],paramArr[i][1]) :
      func === "get" ?
        testCache.get(paramArr[i][0]) :
        console.log('Invalid Input... Operation Skipped');
  });
  return testCache;
})(funcs, params);

module.exports = TestLRUCache;