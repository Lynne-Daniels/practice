var Queue = function() {
  // Hey! Rewrite in functional shared style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //accepts any variable, holds a list of variables, returns the number of variables or the oldest variable added

  // variables will be dataStorage and start, end -- numerical indexes representing the position in line.  
  //The actual end value will represent the total number of items that have ever been in the line
  //Start is not always 0.  As items leave the line, start increments
  var queue = {
    start: 0,
    end: 0,
    dataStorage: {}
  };
  extend(queue, queueMethods); // extend is defined in functional-shared/stack.js
  return queue;
};
//console.log(extend);

// has methods to enqueue, dequeue, and report size
var queueMethods = {};

//enqueue will add a key/val pair to the queue.  The key will be a number representing the back of the line.
// increment end
queueMethods.enqueue = function (value) {
  this.dataStorage[this.end] = value;  
  this.end++;
};


//dequeue will return the value associated with the key/val pair at the front of the line.  "start" is incremented
//  to the key of the next value in line.
queueMethods.dequeue = function (value) {
  if (this.size() > 0) {
    var tempVal = this.dataStorage[this.start];
    delete this.dataStorage[this.start];
    this.start++;
    return tempVal;
  }
};

//size will report the number of items in the queue.  size = end - start;
queueMethods.size = function() {
  return this.end - this.start;
};