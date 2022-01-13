function oddEven(numbers) {
  // Code the function here.
  //return (numbers % 2 === 0 ? console.log(`${numbers} is an even number.`) : console.log(`${numbers} is an odd number.`));
  //typeof(numbers) === "number"
  if (Number.isInteger(numbers)){
    if (numbers % 2 !== 0) {
      return `${numbers} is an odd number.`;
    }   else {
      return `${numbers} is an even number.`;
    } }else {
    return console.log(`${numbers} is not a number.`);
  }
}

const oddNumber = oddEven(3);

const evenNumber = oddEven(6);

const notANumber = oddEven("two");

const zeroNumber = oddEven(0);


// Do not remove last lines, it is for tests
module.exports = oddEven;