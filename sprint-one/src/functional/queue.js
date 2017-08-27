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
  };

  someInstance.dequeue = function() {
    if ((count - first) > 0) {
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
