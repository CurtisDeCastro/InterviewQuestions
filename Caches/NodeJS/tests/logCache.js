var util = require("util");

const logCache = (cache) => {
  console.log(util.inspect(cache, {showHidden: true, depth: null}));
}

module.exports = logCache;