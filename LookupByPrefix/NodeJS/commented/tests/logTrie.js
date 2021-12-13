var util = require("util");

const logTrie = (trie) => {
  console.log(util.inspect(trie, {showHidden: true, depth: null}));
}

module.exports = logTrie;