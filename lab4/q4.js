function outerFunction() {
  let count = 0;

  function innerFunction() {
    count++;
    console.log("Count:", count);
  }

  return innerFunction;
}

let counter = outerFunction();
counter(); // 1
counter(); // 2
counter(); // 3
