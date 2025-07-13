// JavaScript hoisting examples

// Example 1: var hoisting
console.log(a); // undefined
var a = 10;

// Example 2: let hoisting
try {
  console.log(b); // ReferenceError
  let b = 20;
} catch (e) {
  console.log("Error:", e.message);
}

// Example 3: function hoisting
sayHi(); // Hello
function sayHi() {
  console.log("Hello");
}

// Example 4: function expression hoisting
try {
  sayBye(); // TypeError
  var sayBye = function () {
    console.log("Bye");
  };
} catch (e) {
  console.log("Error:", e.message);
}
