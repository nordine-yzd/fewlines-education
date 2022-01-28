import readline from "readline";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculator(reader) {
  console.log("Ready to compute operations!\n****************************\n");

  function ifNum1IsNotInteger() {
    reader.question("Enter the first number\n> ", (number1) => {
      const num1 = parseFloat(number1);

      if (Number.isInteger(num1)) {
        reader.question("Choose an operation: [ + - * / ]\n", (operations) => {
          if (operations === "+" || operations === "/" || operations === "*" || operations === "-") {
            reader.question("Enter the second number\n> ", (number2) => {
              const num2 = parseFloat(number2);
              if (Number.isInteger(num2)) {
                if (operations === "+") {
                  console.log(`\n${num1} + ${num2} = ${num1 + num2}`);
                } else if (operations === "*") {
                  console.log(`\n${num1} * ${num2} = ${num1 * num2}`);
                } else if (operations === "/") {
                  console.log(`\n${num1} / ${num2} = ${parseFloat(num1 / num2)}`);
                } else if (operations === "-") {
                  console.log(`\n${num1} - ${num2} = ${num1 - num2}`);
                }
              } else {
                console.log("Wrong input!");
              }

              reader.close();
            });
          }
        });
      } else {
        console.log("Wrong input!\n");
        ifNum1IsNotInteger();
      }
    });
  }
  ifNum1IsNotInteger();
}

calculator(reader);

// export function
export default calculator;

// // reader.question("Enter the first number\n> ", (firstNumber) => {});
// // console.log(parseFloat("1.2"));
// // console.log(parseFloat("1,2"));

// const number1 = "11.22";

// const b = parseFloat(number1);
// console.log(b);
// console.log(typeof b);
