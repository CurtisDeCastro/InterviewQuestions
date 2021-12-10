const WordTrie = require('../classes/WordTrie.js');
const TestTrie = (() => {
  let testTrie = new WordTrie();
  let values = 'hello,hella,cat,catch,cattle,cog,dog'.split(',');
  values.forEach(val => {
    testTrie.insert(val);
  })
  return testTrie;
})();

module.exports = TestTrie;