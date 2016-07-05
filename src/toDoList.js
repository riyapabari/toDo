var ToDoList = function(ToDoItem) {
	this.ToDoItem = ToDoItem;
	this.list = [];
};

ToDoList.prototype = {
	addToDo: function(task) {
		toDoItem = new this.ToDoItem(task);
		this.list.push(toDoItem);
	},

	html: function() {
		var numberOfItems = this.list.length;
		var returnArray = ['<ul>\n'];
		for (var i=0; i < numberOfItems; i++) {
			returnArray.push('<li><div>' + (this.list[i].task) + '</div></li>\n');
		}
		returnArray.push('</ul>');
		return returnArray.join('');
	},

};

module.exports = ToDoList;



