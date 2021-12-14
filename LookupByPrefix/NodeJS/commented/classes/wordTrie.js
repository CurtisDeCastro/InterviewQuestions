// import letter class
var Letter = require('./letter.js');

// Define WordTrie class and bind root property to new letter instance with null as its head
function WordTrie() {
  this.root = new Letter(null);
}

// define insert method as function with param 'word'
WordTrie.prototype.insert = function(word) {
  // if no word input, finish without executing any code
  if (!word) return;
  // define alias variable for current node
  var node = this.root;
  // iterate through the word
  for(var i = 0; i < word.length; i++) {
    // if node does not have a child value with current letter
    if (!node.children[word[i]]) {
      // add a new child with that letter
      node.children[word[i]] = new Letter(word[i]);
      // assign current node to be parent node of newly created letter
      node.children[word[i]].parent = node;
    }
    // reassign current node to be newly created node
    node = node.children[word[i]];
    // if we have reached the last letter of the word
    if (i == word.length-1) {
      // indicate that this is the end of the word
      node.isWord = true;
    }
  }
};
// define contains method as function with param 'word'
WordTrie.prototype.contains = function(word) {
  // if no word input, finish without executing any code
  if (!word) return;
  // define alias variable for current node
  var node = this.root;
  // iterate through the word
  for(var i = 0; i < word.length; i++) {
    // define temporary value alias assigned to current node's child value of current letter in loop
    let temp = node.children[word[i]];
    // if the current letter exists as a property within the children of the current node
    if (temp) {
      // reassign the current node to be the found child value and begin next iteration
      node = temp;
    // otherwise
    } else {
      // return false to indicate that the trie does not contain the word being saught
      return false;
    }
  }
  // return true when end if word is reached and located
  return node.isWord;
};

// define remove method as function with param 'word'
WordTrie.prototype.remove = function(word) {
  // if no word input, finish without executing any code
  if (!word) return;
  // define alias variable for current node
  let node = this.root;
  // define bucket to store the found nodes for deletion
  const killChain = [];
  // assign alias variable for length
  // (if word length is 1 character, length must = 2 or for-loop will not run)
  const length = word.length === 1 ? 2 : word.length;
  // iterate through word
  for (let i = 0; i < length; i++) {
    // if the current node has child with property of current char in word
    if (node.children[word[i]]) {
      // push the current node the the deletion bucket
      killChain.push(node);
      // reassign current node to the found child node and begin next iteration
      node = node.children[word[i]];
    } else {
      // if there is no child with expected property, end loop
      return;
    }
  }
  // if the current node has children
  if (Object.keys(node.children).length) {
    // assign isWord property to be false, indicating that there are remaining letters in the word
    node.isWord = false;
    // return the current node
    return node;
  }
  // assign alias variables for child and parent, returning the first element of the bucket if any values remain
  let child = killChain.length ? killChain.pop() : null;
  let parent = killChain.length ? killChain.pop() : null;
  // invoke child and parent, and delete child value of the parent
  child && parent && delete parent.children[child.letter];
  // if the parent value still has children or we haven't deleted every node from the bucket
  if (Object.keys(parent.children).length || !killChain.length) {
    // the node is not the end of the word
    node.isWord = false;
    // return it
    return node;
  }
  // step back one level up the trie
  child = parent;
  // reassign the parent value to the remaining element in the bucket
  parent = killChain.pop();
}
// define find method as function with param 'word'
WordTrie.prototype.find = function(word) {
  // if no word input, finish without executing any code
  if (!word) return;
  // define alias variable for current node
  let node = this.root;
  // instantiate bucket for found words
  const foundWords = [];
  // iterate through the letters of the word
  for(var i = 0; i < word.length; i++) {
    // if the current node has current letter as a child
    if (node.children[word[i]]) {
      // reassign current node to the found child and begin next iteration
      node = node.children[word[i]];
    // otherwise we have found all of the words
    } else {
      // return the found words
      return foundWords;
    }
  }
  // implement recursive helper function (below) by passing in current node and array of found words
  findAllWords(node, foundWords);

  // return array of found words
  return foundWords;
};
// define recursive function to find all words, with params 'node' (current node) and 'arr' (output array)
const findAllWords = (node, arr) => {
  // if the current node is the last letter of the word
  if (node.isWord) {
    // add the word the the found words array
    arr.push(node.getWord());
  }
  // for each child in the node's children
  for (let child in node.children) {
    // recursively sweep through the trie to find all matches
    findAllWords(node.children[child], arr);
  }
}

// export WordTrie class
module.exports = WordTrie;