var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.top = 0;
  this.storage = {};
};

var stack = new Stack;
Stack.prototype.size = function() {
  return this.top;
};
Stack.prototype.push = function(val) {
  this.storage[this.top] = val;
  this.top ++;
};
Stack.prototype.pop = function() {
  if (this.top > 0) {
    var temp = this.storage[this.top - 1];
    delete this.storage[this.top -1];
    this.top --;
    return temp;
  }
};
