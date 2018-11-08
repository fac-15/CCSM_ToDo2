var test = require('tape');
var logic = require('./logic.js');
// var todoFunctions = require ('./logic.js');

test("Example test", function(t) {
  t.equal(logic.testFunc(2, 3), 4, "2 plus 2 should equal four");
  t.end();
});

// test("example test", function(t){
//   t.pass();
//   t.end();
// })

// test("Example test", function(t) {
//   t.pass(todoFunctions.addTodo("hello", "goodbye"), "hello", "should return hello");
//   t.end();
// });
