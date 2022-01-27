const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function numberGame(reader, min = 1, max = 100) {
  //random entre 1 compris et 100 compris
  const random = Math.floor(Math.random() * max) + min;
  console.log("Welcome !\nYou have to find the right number, between 1 and 100!\nGood luck!!\n ");
  console.log(random);
  reader.question("Enter a number\n", (number) => {
    if (Number.isInteger(number) === true) {
      if (number == random) {
        console.log("You won!");
      }
      if (number > random && number < 100) {
        console.log("Too high");
        reader.close();
        numberGame(reader, min, max);
      }
      if (number < random && number > 0) {
        console.log("Too low");
        numberGame(reader, min, max);
      }
    } else {
      console.log("This was not a number");
    }
  });
}

numberGame(reader);

module.exports = numberGame;
