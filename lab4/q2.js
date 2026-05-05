let numbers = [1, 2, 3, 4, 5];

// push – add element at end
numbers.push(6);
console.log("After push:", numbers);

// forEach – loop through array
console.log("Using forEach:");
numbers.forEach((num) => {
  console.log(num);
});

// map – transform array
let squares = numbers.map(num => num * num);
console.log("Using map (squares):", squares);

// filter – filter elements
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Using filter (even numbers):", evenNumbers);
