function Letter(letter) {
  this.letter = letter;
  this.parent = null;
  this.children = {};
  this.isWord = false;
}

Letter.prototype.getWord = function() {
  var output = [];
  var node = this;
  while (node !== null) {
    output.push(node.letter);
    node = node.parent;
  }
  return output.join('');
};

module.exports = Letter;

