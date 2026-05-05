// Hoisting with var
console.log(a); // undefined
var a = 10;

// Hoisting with function
hello();

function hello() {
  console.log("Hello, I am hoisted!");
}
