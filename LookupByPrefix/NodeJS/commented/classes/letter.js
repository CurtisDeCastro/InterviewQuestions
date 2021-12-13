// define class for node in word trie
function Letter(letter) {
  // bind properties to class
  this.letter = letter;
  this.parent = null;
  this.children = {};
  // this property signifies that it is the last letter of the word
  this.isWord = false;
}

// define getWord method
Letter.prototype.getWord = function() {
  // declare output array to contain found nodes
  var output = [];
  // declare alias variable
  var node = this;
  // begin loop that ends once each letter of the word has been returned
  while (node !== null) {
    // add the current letter to output array
    output.push(node.letter);
    // reassign current node to parent node and restart loop until no letters are left
    node = node.parent;
  }
  // join each letter of the output array into a word string and return it
  return output.join('');
};

// export Letter class
module.exports = Letter;

