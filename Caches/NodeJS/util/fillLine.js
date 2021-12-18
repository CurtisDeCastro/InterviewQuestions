const fillLine = (word, len) => {
  let length = word.length;
  for (let i = length; i < len; i++) {
    word += '.';
  }
  return word;
}

module.exports = fillLine;