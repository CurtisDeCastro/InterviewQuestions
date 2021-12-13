// import util from node library
var util = require("util");

// define function that takes in a trie as param
const logTrie = (trie) => {
  // convert the trie to a JSON text object with proper indentation and log to console
  console.log(util.inspect(trie, {showHidden: true, depth: null}));
}

// export the logTrie function
module.exports = logTrie;