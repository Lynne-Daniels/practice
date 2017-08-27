var Queue = function() {
  var someInstance = {};
  var count = 0;  //number of items ever stored
  var first = 0;  //position of item at the front of the line

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count ++;
    console.log(storage, first, count);
  };

  someInstance.dequeue = function() {
    if ((Object.keys(storage).length) > 0) {
      console.log((Object.keys(storage).length), 'length');
      console.log(storage[first] , ' is zero');
      let output = storage[first];
      delete storage[first];
      first ++;
      return output;
    }
  };

  someInstance.size = function() {
    return count - first;
  };

  return someInstance;
};
