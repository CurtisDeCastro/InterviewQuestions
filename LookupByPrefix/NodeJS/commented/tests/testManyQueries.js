// import Word Trie class, Art of War word array and cosole message library
const WordTrie = require('../classes/wordTrie.js');
const data = require("../utilities/artOfWar.js");
const LargeDataset = require("../utilities/LargeDataset.js");
const log = require('./messages');

// helper function to make even spacing for console outputs
const fillLine = (word) => {
  let length = word.length;
  for (let i = length; i < 16; i++) {
    word += '.';
  }
  return word;
}

// instantiate new trees for medium test dataset (below)
let medTestTrie = new WordTrie();

// factory function to test ~100 queries for each method
const testManyQueries = (methods) => {

  // instantiate a 100 word long string of words
  const medQueryStr = "These are the words with which I shall test the functionality of this function. I am intentionally trying to make this test strenuous to discover any boundaries upon which my algorithm may fail. Dozens of words may make this happen, and hundreds would provide me with an even more accurate picture, however I will be satisfied upon completion of this test. I want to use random values so I'm going to make this string one hundred words long. A lorem ipsum generator would have been useful but alas here we are nearly at the end of the string. Look at Me!";

  // split the string into an array of its values
  const medQueryArr = medQueryStr.split(' ');
  // fill the medium trie by inserting each word
  const fillTrie = medQueryArr.forEach(word => {
    medTestTrie.insert(word);
  });
  // if user has indicated a preference to test the contains method
  methods.contains ?
    // make copy of 100 word array and for each value
    medQueryArr.slice().forEach((word) => {
      // log whether that word is in the Art of War.
      // (This is designed to output true AND false because the large dataset is NOT expected
      // to contain every value)
      log.manyQueries.contains(fillLine(word),LargeDataset.contains(word));
    // if user has not indicated a preference to log this method, do nothing
    }) : null;
  // if user has indicated a preference to test the insert method
  methods.insert ?
    // using an IIFE
    (() => {
      // make copy of 100 word array and insert each value into the medium test trie
      medQueryArr.slice().forEach((word) => medTestTrie.insert(word));
      // create a for-loop to test 100 values
      for(let i = 0; i < 100; i++){
        // create a random index
        let randomIndex = Math.floor((Math.random()*100));
        // assign alias variable to return a random word within the medium query word array
        const random = medQueryArr[randomIndex],
        // assign alias variable returning boolean value to determine if the test dataset contains
        wasInserted = medTestTrie.contains(random);
        // log result of testing insert method into test trie and confirming its presence after insertion
        log.manyQueries.insert(random, wasInserted);
      }
      // upon completion of the loop, reset the test trie
      medTestTrie = new WordTrie();
    // if user has not indicated a preference to log this method, do nothing
    })() : null;
  // if user has indicated a preference to test the remove method
  methods.remove ?
    // using an IIFE
    (() => {
      // instantiate a new word trie
      const testTrie = new WordTrie();
      // insert the first value from the medium word array
      testTrie.insert(medQueryArr[0]);
      // starting at the next value, iterate through the array
      for (let i = 1; i < medQueryArr.length; i++){
        // delcare alias variable for current word
        let word = medQueryArr[i];
        // insert word into test trie
        testTrie.insert(word);
        // declare alias boolean variable to return whether the testTrie contains the word after insertion
        let wasInserted = testTrie.contains(word);
        // remove the word
        testTrie.remove(word);
        // declare alias boolean variable to return whether the word is still present after removal attempt
        let wasRemoved = testTrie.contains(word);
        // if the word was inserted and removed as expected
        if (wasInserted && !wasRemoved){
          // log the successful result to the console
          log.manyQueries.removeSuccess(word);
        // otherwise
        } else {
          // log the failure to the console
          log.manyQueries.removeFailure(word);
        }
      }
      // reset the test Trie to initial state
      medTestTrie = new WordTrie();
    // otherwise do nothing
    })() : null;
  // if the user has inidicated a preference to test the find method
  methods.find ?
    // using an IIFE
    (() => {
      // iterate through a copy of the medium word array
      medQueryArr.slice().forEach((word) => {
        // declare alias variable to return array of words with the input prefix
        const wordIsThere = LargeDataset.find(word);
        // if the query returns any results
        if (wordIsThere){
          // log a success message to the console
          log.manyQueries.findSuccess(word, data.length);
        // otherwise
        } else {
          // log a failure message to the console
          log.manyQueries.findFailure(word, data.length);
        }
      })
    // otherwise do nothing
    })() : null;
}

// export the function
module.exports = testManyQueries;
