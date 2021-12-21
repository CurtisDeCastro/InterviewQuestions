function Cache(){
  this.cache = {};
}

Cache.prototype.get = function(key){
  if (this.cache[key]) {
    console.log(this.cache[key]);
    return this.cache[key];
  } else {
    console.log('null');
    return null;
  }
}

Cache.prototype.insert = function(key, val){
  if (this.cache[key]) {
    this.cache[key] = val;
    return true;
  } else {
    this.cache[key] = val;
    return false;
  }
}

module.exports = Cache;