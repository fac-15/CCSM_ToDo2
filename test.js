var test = require("tape");
var logic = require("./logic.js");

test("Example test", function(t) {
  t.pass();
  t.end();
});

test("addTodo outcome", function(t) {
  t.equal(logic.addTodo(10, 5), 15, "should be 15");
  t.end();
});

test("addTodo failing outcome", function(t) {
  t.equal(logic.addTodo(10, 5), 15, "should be 15");
  t.end();
});
