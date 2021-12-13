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
  const chain = [];
  const length = word.length === 1 ? 2 : word.length;
  for (let i = 0; i < length; i++) {
    if (node.children[word[i]]) {
      chain.push(node);
      node = node.children[word[i]];
    } else {
      return;
    }
  }
  if (Object.keys(node.children).length) {
    node.isWord = false;
    return node;
  }
  let child = chain.length ? chain.pop() : null;
  let parent = chain.length ? chain.pop() : null;
  while (true) {
    child && parent && delete parent.children[child.letter];
    if (
      Object.keys(parent.children).length ||
      !chain.length
    ) {
      node.isWord = false;
      return node;
    }
    child = parent;
    parent = chain.pop();
  }
}
WordTrie.prototype.find = function(word) {
  if (!word) return;
  var node = this.root;
  var output = [];
  for(var i = 0; i < word.length; i++) {
    if (node.children[word[i]]) {
      node = node.children[word[i]];
    } else {
      return output;
    }
  }
  findAllWords(node, output);
  return output;
};
const findAllWords = (node, arr) => {
  if (node.isWord) {
    arr.unshift(node.getWord());
  }
  for (var child in node.children) {
    findAllWords(node.children[child], arr);
  }
}

module.exports = WordTrie;