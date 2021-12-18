function Cache(){
  this.cache = {};
}

Cache.prototype.get = function(int){
  if (this.cache[int]) {
    console.log(this.cache[int]);
    return this.cache[int];
  } else {
    console.log('null');
    return null;
  }
}

Cache.prototype.insert = function(int, string){
  if (this.cache[int]) {
    this.cache[int] = string;
    return true;
  } else {
    this.cache[int] = string;
    return false;
  }
}

module.exports = Cache;