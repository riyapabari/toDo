var assert = require('chai').assert;
var expect = require('chai').expect;

var ToDoItem = require('../src/toDoItem')


describe('ToDoItem', function() {

	var toDoItem;

	beforeEach(function() {
		toDoItem = new ToDoItem('Eat breakfast');
	});


	it('can create a to do', function() {
		expect(toDoItem).to.be.an.instanceof(ToDoItem);
	});

  it('can store and retrieve a task string', function() {
    assert.typeOf(toDoItem.task, 'string', 'task should be a string');
  });

  it('can store and retrieve a task', function() {
    assert.equal(toDoItem.task, 'Eat breakfast');
  });

  it('has initial status of incomplete', function() {
    assert.equal(toDoItem.isComplete, false);
  });

  it('once done, has status of complete', function() {
    toDoItem.finished();
    assert.equal(toDoItem.isComplete, true);
  });

});

