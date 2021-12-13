// Import word trie class
const WordTrie = require('../classes/WordTrie.js');

// Immediately invoked function to create a test trie with complicated values
const TestTrie = (() => {
  // instantiate new trie
  let testTrie = new WordTrie();
  // create array of values from string
  let values = 'hello,hella,cat,catch,cattle,cog,dog'.split(',');
  // fill test trie with values from word array
  values.forEach(val => testTrie.insert(val));
  // return the newly created and populated trie
  return testTrie;
})();

// export the test trie (WARNING: EXPORTS TRIE NOT FUNCTION)
module.exports = TestTrie;