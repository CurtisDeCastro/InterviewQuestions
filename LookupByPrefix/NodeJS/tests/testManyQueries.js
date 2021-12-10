const WordTrie = require('../classes/wordTrie.js');
const data = require("../utilities/artOfWar.js");
const log = require('./messages');


const fillLine = (word) => {
  let length = word.length;
  for (let i = length; i < 16; i++) {
    word += '.';
  }
  return word;
}

let largeTestTrie = new WordTrie();
let medTestTrie = new WordTrie();

const LargeDataset = (() => {
  let largeTestTrie = new WordTrie();
  data.forEach((word) => {
    largeTestTrie.insert(word);
  })
  return largeTestTrie;
})();


const testManyQueries = (methods) => {
  const longQueryStr = "These are the words with which I shall test the functionality of this function. I am intentionally trying to make this test strenuous to discover any boundaries upon which my algorithm may fail. Dozens of words may make this happen, and hundreds would provide me with an even more accurate picture, however I will be satisfied upon completion of this test. I want to use random values so I'm going to make this string one hundred words long. A lorem ipsum generator would have been useful but alas here we are nearly at the end of the string. Look at Me!";
  const longQueryArr = longQueryStr.split(' ');
  const fillTrie = longQueryArr.forEach(word => {
    medTestTrie.insert(word);
  });
  methods.contains ?
    longQueryArr.slice().forEach((word) => {
      log.manyQueries.contains(fillLine(word),medTestTrie.contains(word));
    }) : null;
  methods.insert ?
    (() => {
      longQueryArr.slice().forEach((word) => medTestTrie.insert(word));
      for(let i = 0; i < 30; i++){
        let randomIndex = Math.floor((Math.random()*100));
        const random = longQueryArr[randomIndex],
        wasInserted = medTestTrie.contains(random);
        log.manyQueries.insert(random, wasInserted);
      }
      medTestTrie = new WordTrie();
    })() : null;
  methods.remove ?
    (() => {
      const testTree = new WordTrie();
      testTree.insert(longQueryArr[0]);
      for (let i = 1; i < 101; i++){
        word = longQueryArr[i];
        testTree.insert(word);
        let wasInserted = testTree.contains(word);
        testTree.remove(word);
        let wasRemoved = testTree.contains(word);
        if (wasInserted && !wasRemoved){
          log.manyQueries.removeSuccess(word);
        } else {
          log.manyQueries.removeFailure(word);
        }
      }
      medTestTrie = new WordTrie();
    })() : null;
  methods.find ?
    (() => {
      longQueryArr.slice().forEach((word) => {
        const wordIsThere = LargeDataset.find(word);
        if (wordIsThere){
          log.manyQueries.findSuccess(word, data.length);
        } else {
          log.manyQueries.findFailure(word, data.length);
        }
      })
    })() : null;
}

module.exports = testManyQueries;
