var Queue = function() {
  var someInstance = {};
  var count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    count ++;
    storage[count] = value;
    console.log(storage[count]);
  };

  someInstance.dequeue = function() {
    if (count > 0) {
      count --;
      console.log(storage[1] , ' is zero');
      return storage[1];
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
