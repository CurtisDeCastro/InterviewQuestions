var Letter = require('./letter.js');

function WordTrie() {
  this.root = new Letter(null);
}

WordTrie.prototype.insert = function(word) {
  if (!word) return;
  var node = this.root;
  for(var i = 0; i < word.length; i++) {
    if (!node.children[word[i]]) {
      node.children[word[i]] = new Letter(word[i]);
      node.children[word[i]].parent = node;
    }
    node = node.children[word[i]];
    if (i == word.length-1) {
      node.isWord = true;
    }
  }
};

WordTrie.prototype.contains = function(word) {
  if (!word) return;
  var node = this.root;
  for(var i = 0; i < word.length; i++) {
    let temp = node.children[word[i]];
    if (temp) {
      node = temp;
    } else {
      return false;
    }
  }
  return node.isWord;
};

WordTrie.prototype.remove = function(word) {
  if (!word) return;
  let node = this.root;
  const killChain = [];
  const length = word.length === 1 ? 2 : word.length;
  for (let i = 0; i < length; i++) {
    if (node.children[word[i]]) {
      killChain.push(node);
      node = node.children[word[i]];
    } else {
      return;
    }
  }
  if (Object.keys(node.children).length) {
    node.isWord = false;
    return node;
  }
  let child = killChain.length ? killChain.pop() : null;
  let parent = killChain.length ? killChain.pop() : null;
  child && parent && delete parent.children[child.letter];
  if (
    Object.keys(parent.children).length ||
    !killChain.length
  ) {
    node.isWord = false;
    return node;
  }
  child = parent;
  parent = killChain.pop();
};

WordTrie.prototype.find = function(query) {
  if (!query) return;
  let node = this.root;
  const foundWords = [];
  for(var i = 0; i < query.length; i++) {
    if (node.children[query[i]]) {
      node = node.children[query[i]];
    } else {
      return foundWords;
    }
  }
  const findAllWords = (node, arr) => {
    node.isWord ? arr.push(node.getWord()) : null;
    Object.keys(node.children).forEach((child) => {
      findAllWords(node.children[child], arr)
    });
  }
  findAllWords(node, foundWords);
  return foundWords;
};


module.exports = WordTrie;