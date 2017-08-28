var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // has storage, size. use Object.create.nameOfPrototype
  var stack = Object.create(stackMethods);
  stack.storage = {};
  stack.top = 0;
  return stack;
};


//has methods to push, pop, and return size LIFO
var stackMethods = {};

stackMethods.size = function() {
  return this.top;
};
stackMethods.push = function(value) {
  this.storage[this.top] = value;
  this.top ++;
};
stackMethods.pop = function() {
  if (this.top > 0) {
    var tempVal = this.storage[this.top - 1];
    delete this.storage[this.top - 1];
    this.top --;
    return tempVal;
  }

};