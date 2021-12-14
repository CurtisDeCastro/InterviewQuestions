// import word trie class
const WordTrie = require('../classes/WordTrie.js')

// imediately invoked function to create a large word trie
const LargeDataset = (() => {
  // import Art of War word array
  const data = require("./artOfWar.js");
  // instantiate a new trie
  let largeTrie = new WordTrie();
  // insert each word in the new word trie
  data.forEach((word) => {largeTrie.insert(word)});
  // return the trie
  return largeTrie;
})();

// export the large dataset trie (WARNING: EXPORTS A TRIE, NOT A FUNCTION)
module.exports = LargeDataset;