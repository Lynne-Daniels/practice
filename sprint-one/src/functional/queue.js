var Queue = function() {
  var someInstance = {};
  var count = 0;
  var first = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    count ++;
    first ++;
    storage[count] = value;
    console.log(storage, first, count);
  };

  someInstance.dequeue = function() {
    if ((Object.keys(storage).length) > 0) {
      console.log((Object.keys(storage).length), 'length');
      console.log(storage[first] , ' is zero');
      let output = storage[first];
      delete storage[first];
      count --;
      first ++;
      return output;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
