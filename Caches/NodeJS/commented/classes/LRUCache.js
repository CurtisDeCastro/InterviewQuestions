
var LRUCache = function(maxCap) {
  if (typeof maxCap === 'number'){
    this.maxCap = maxCap;
  }
  this.cache = new Map();
};

LRUCache.prototype.get = function(key) {
  const {cache} = this;
  if (cache.has(key)){
    const val = cache.get(key);
    cache.delete(key);
    cache.set(key, val);
    return val;
  } else {
      return -1;
  }
};

LRUCache.prototype.put = function(key, val) {
  const {cache, maxCap} = this;
  if(cache.get(key)){
    cache.delete(key);
  }
  cache.set(key, val);
  if (cache.size > maxCap) {
    const firstElem = cache.keys().next().val;
    cache.delete(firstElem);
  }
};

