const funcs = require('./util/funcs.js');
const params = require('./util/params.js');

var LRUCache = function(maxCap) {
  if (typeof maxCap === 'number'){
    this.maxCap = maxCap;
  }
  this.cache = new Map();
};

LRUCache.prototype.get = function(key) {
  const {cache} = this;
  if (cache.has(key)){
    const val = cache.get(key);
    cache.delete(key);
    cache.set(key, val);
    return val;
  } else {
      return -1;
  }
};

LRUCache.prototype.put = function(key, val) {
  const {cache, maxCap} = this;
  if(cache.get(key)){
    cache.delete(key);
  }
  cache.set(key, val);
  if (cache.size > maxCap) {
    const firstElem = cache.keys().next().val;
    cache.delete(firstElem);
  }
};

const runMain = ((arrSize) => {
  console.time('Took: ');
  const runTests = (funcArr, paramArr) => {
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
    tests.unshift(null);
    console.log(tests);
    return tests;
  };

  const fillLine = (word, len) => {
    let length = word.length;
    for (let i = length; i < len; i++) {
      word += '.';
    }
    return word;
  }
  runTests(funcs, params)
  // runTests(funcs, params).forEach((value, i) => {
  //   value === undefined ?
  //     console.log(fillLine(`#${i} Writing Value to Memory`,36)) :
  //     value === -1 ?
  //     console.log(fillLine(`#${i} Value Not Found`,36)) :
  //     console.log(fillLine(`#${i} Reading Value: `,36),value);
  // });
  console.log(`Testing ${arrSize} Values `);
  console.timeEnd('Took: ');
})(funcs.length)

