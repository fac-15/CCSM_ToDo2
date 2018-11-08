var test = require('tape');
var logic = require('./logic.js');
// var todoFunctions = require ('./logic.js');

var arr = [
  {description: "charlie", done: false, id: 1},
  {description: "cynthia", done: false, id: 2},
  {description: "mike", done: false, id: 3}
];

var newArr = [
  {description: "charlie", done: false, id: 1},
  {description: "cynthia", done: false, id: 2},
  {description: "mike", done: false, id: 3},
  {description: "susan", done: false, id: 1}
];

var delArr = [
  {description: "charlie", done: false, id: 1},
  {description: "mike", done: false, id: 3},
  {description: "susan", done: false, id: 1}
];

var markArr = [
  {description: "charlie", done: false, id: 1},
  {description: "cynthia", done: true, id: 2},
  {description: "mike", done: false, id: 3},
  {description: "susan", done: false, id: 1}
];


test('Example test', function(t) {
  t.pass();
  t.end();
});

test('Add todo', function(t) {
  t.deepEqual(logic.addTodo(arr, "susan"), newArr, "should add new todo");
  t.end();
});

test('Delete todo', function(t) {
  t.deepEqual(logic.deleteTodo(newArr, 2), delArr, "should remove second todo");
  t.end();
});

test('Mark todo', function(t) {
  t.deepEqual(logic.markTodo(newArr, 2), markArr, "should mark done on second todo");
  t.end();
});
