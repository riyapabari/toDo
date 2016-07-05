var ToDoList = function(ToDoItem) {
	this.ToDoItem = ToDoItem;
	this.list = [];
};

ToDoList.prototype = {
	addToDo: function(task) {
		toDoItem = new this.ToDoItem(task);
		this.list.push(toDoItem);
	}

};

module.exports = ToDoList;



