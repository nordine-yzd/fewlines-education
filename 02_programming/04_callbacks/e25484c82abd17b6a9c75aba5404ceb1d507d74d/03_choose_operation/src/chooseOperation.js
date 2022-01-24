function addition(a, b) {
  // Code here
  const result = a + b;
  return result;
}
// addition(1, 2);
function substraction(a, b) {
  // Code here
  const result = a - b;
  return result;
}
// substraction(10, 2);

function multiplication(a, b) {
  // Code here
  const result = a * b;
  return result;
}

function division(a, b) {
  // Code here
  const result = a / b;
  return result;
}

function chooseOperation(int1, int2, operation) {
  if (typeof operation === "function" && Number.isInteger(int1) === true && Number.isInteger(int2) === true) {
    return operation(int1, int2);
  } else {
    throw new Error("expected chooseOperation || addition || substraction || multiplication || division ");
  }
}
const rr = addition(1, 3);
console.log(rr);
console.log(Number.isInteger(rr));
// const result = chooseOperation(3, 2, addition);

// console.log(result);
// console.log(Number.isInteger(1 / 2));

// Leave the line below for tests to work
module.exports = { chooseOperation, addition, substraction, multiplication, division };
