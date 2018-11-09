var test = require("tape");
var logic = require("./logic.js");
// var todoFunctions = require ('./logic.js');

var arr = [
  { description: "charlie", done: false, id: 1 },
  { description: "cynthia", done: false, id: 2 },
  { description: "mike", done: false, id: 3 }
];

var newArr = [
  { description: "charlie", done: false, id: 1 },
  { description: "cynthia", done: false, id: 2 },
  { description: "mike", done: false, id: 3 },
  { description: "susan", done: false, id: 1 }
];

var delArr = [
  { description: "charlie", done: false, id: 1 },
  { description: "mike", done: false, id: 3 },
  { description: "susan", done: false, id: 1 }
];

var markArr = [
  { description: "charlie", done: false, id: 1 },
  { description: "cynthia", done: true, id: 2 },
  { description: "mike", done: false, id: 3 },
  { description: "susan", done: false, id: 1 }
];

test("Example test", function(t) {
  t.pass();
  t.end();
});

test("Test if no content is added in the input", function(t) {
  t.deepEqual(logic.addTodo(arr, " "), arr, "Todo list should not change");
  t.end();
});

test("Test max lenght is not more than 200 characters", function(t) {
  t.deepEqual(
    logic.addTodo(
      arr,
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qudscsd"
    ),
    arr,
    "Todo list should stop at 200 characters"
  );
  t.end();
});

test("Add todo", function(t) {
  t.deepEqual(logic.addTodo(arr, "susan"), newArr, "should add new todo");
  t.end();
});

test("Delete todo", function(t) {
  t.deepEqual(logic.deleteTodo(newArr, 2), delArr, "should remove second todo");
  t.end();
});

test("Mark todo", function(t) {
  t.deepEqual(
    logic.markTodo(newArr, 2),
    markArr,
    "should mark done on second todo"
  );
  t.end();
});

test("How Delete.todo function would handle non existing todo", function(t) {
  t.deepEqual(
    logic.deleteTodo(newArr, 4),
    newArr,
    "should leave newArr untouched"
  );
  t.end();
});
