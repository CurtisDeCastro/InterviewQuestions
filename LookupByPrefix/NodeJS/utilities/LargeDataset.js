const WordTrie = require('../classes/WordTrie.js')

const LargeDataset = (() => {
  const data = require("./artOfWar.js");
  let largeTrie = new WordTrie();
  data.forEach((word) => {
    largeTrie.insert(word);
  })
  return largeTrie;
})();

module.exports = LargeDataset;