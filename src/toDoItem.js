var ToDoItem = function(task) {
  this.task = task;
  this.isComplete = false;
};

ToDoItem.prototype = {
  finished: function() {
    this.isComplete = true;
  },
};


module.exports = ToDoItem;
