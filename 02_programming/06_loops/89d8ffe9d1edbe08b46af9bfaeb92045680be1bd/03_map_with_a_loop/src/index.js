function mapLoop(array, func) {
  // Code the function here.
  let result = [];
  for (let index = 0; index < array.length; index++) {
    const thisIndex = array[index];
    result.push(func(thisIndex));
  }
  return result;
}

const numbers = [1, 2, 3, 4];

function double(number) {
  return number * 2;
}

const doubledNumbers = mapLoop(numbers, double);

console.log(doubledNumbers);

// Do not remove the following lines, it is for tests
module.exports = mapLoop;
