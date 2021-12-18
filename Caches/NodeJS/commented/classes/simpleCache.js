function Cache(){
  this.cache = {};
}

// Gets the value of the key if it exists in the cache, or null otherwise.
Cache.prototype.get = function(int){
  if (this.cache[int]) {
    console.log(this.cache[int]);
    return this.cache[int];
  } else {
    console.log('null');
    return null;
  }
// You can return a reference to the data inside your class.
// Put print statements that show the value of what's being returned.
}


Cache.prototype.insert = function(int, string){
  // Insert a value, or update it if it is already present.
  // updating
  if (this.cache[int]) {
    this.cache[int] = string;
    return true;
  } else {
    this.cache[int] = string;
    return false;
  }
}


const test = new Cache();

test.insert(1, "1")
test.insert(2, "2");
test.insert(2, "3");
test.get(1); // Prints "1"
test.get(2); // Prints "2"
test.get(3); // Prints null