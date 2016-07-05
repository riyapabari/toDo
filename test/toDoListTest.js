var assert = require('chai').assert;
var expect = require('chai').expect;
var sinon = require("sinon");

var ToDoList = require('../src/toDoList')

describe('ToDoList', function() {

  var toDoList;
  var ToDoItemSpy;

  beforeEach(function() {
    ToDoItemSpy = sinon.spy();
    toDoList = new ToDoList(ToDoItemSpy);
  });

  it('can create a new to do list', function() {
    expect(toDoList).to.be.an.instanceof(ToDoList);
  });

  it('can store a new task in a todo object', function() {
  	toDoList.addToDo('Eat breakfast');
    expect(ToDoItemSpy).to.have.been.calledWithNew;
  });

  it('list is empty to begin', function() {
    expect(toDoList.list).to.be.empty;
  });

  it('list is no longer empty once toDoItem has been added', function() {
    toDoList.addToDo('Eat breakfast');
    expect(toDoList.list).not.to.be.empty;
  });

});
