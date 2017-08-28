var extend = function (obj1, obj2) {
  for (var key in obj2) {
    if (!obj1.hasOwnProperty(key)) {
      obj1[key] = obj2[key];
    }
  }
};
var stackMethods = {};
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // contains data in an object with numeric keys LIFO
  var theStack = {
    _size: 0,
    stackData: {}
  };
  extend (theStack, stackMethods);
  return theStack;
};

// has push, pop, and size methods

// check for data and return the top of the stack (highest index)
stackMethods.pop = function() {
  // try {
  if (this._size > 0) {
    var tempItem = this.stackData[this._size - 1];
    delete this.stackData[this._size - 1];
    this._size --;

    return tempItem;
  }
};

// put a new value on the top of the stack
stackMethods.push = function(value) {
  this.stackData[this['_size']] = value;
  this._size ++;
};

// return the size of the stack
stackMethods.size = function() {
  return this['_size'];
};
