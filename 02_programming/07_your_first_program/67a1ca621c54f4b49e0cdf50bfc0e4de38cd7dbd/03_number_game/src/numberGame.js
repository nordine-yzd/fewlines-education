const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function numberGame(reader, min = 1, max = 100) {
  //random entre 1 compris et 100 compris
  const random = Math.round(Math.random() * (max - min) + min);
  console.log(random + "   -----------------------");
  console.log("Welcome !\nYou have to find the right number, between 1 and 100!\nGood luck!!\n ");
  function func() {
    reader.question("Enter a number\n", (number) => {
      const num = parseInt(number);
      if (Number.isInteger(num) === true) {
        if (num === random) {
          console.log("You won!");
          reader.close();
        } else if (num < 1 || num > 100) {
          console.log("The number is between 1 and 100\n");
          func();
        } else if (num > random) {
          console.log("Too high\n");
          func();
        } else {
          console.log("Too low\n");
          func();
        }
      } else {
        console.log("This was not a number\n");
        func();
      }
    });
  }
  func();
  reader.close();
}

numberGame(reader);

module.exports = numberGame;
