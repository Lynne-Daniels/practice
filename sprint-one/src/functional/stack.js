var Stack = function() {
  var someInstance = {};
  var count = 0;
  // Use an object with numeric keys to store values

  // Implement the methods below
  someInstance.push = function(value) {
    count ++;
    someInstance[count] = value;
  };

  someInstance.pop = function() {

    if (count > 0) {
      count --;
      return someInstance[count + 1]; 
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
