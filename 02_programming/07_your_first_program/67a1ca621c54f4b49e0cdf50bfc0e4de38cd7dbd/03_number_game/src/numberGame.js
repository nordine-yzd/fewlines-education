const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function numberGame(reader, min = 1, max = 100) {
  console.log("entree dans la fonction");
  //random entre 1 compris et 100 compris
  const random = Math.floor(Math.random() * 100) + 1;
  console.log("Welcome !\nYou have to find the right number, between 1 and 100!\nGood luck!!\n ");
  console.log(random);
  reader.question("Enter a number\n", (number) => {
    if (number == random) {
      console.log("You won!");
      reader.close();
    } else if (number > random && number < 100) {
      console.log("Too low");
      reader.close();
      numberGame(reader, min, max);
    }
    // else if (number > random && number === 100) {
    //   console.log("Too high");
    //   reader.close();
    // } else if (typeof number === "string") {
    //   console.log("This was not a number");
    //   reader.close();
    // } else if (number < min || number > max) {
    //   console.log("The number is between 1 and 100");
    //   reader.close();
    // } else if (number === random) {
    //   console.log("You won!");
    //   validation = true;
    //   reader.close();
    // }
  });
}

numberGame(reader);

module.exports = numberGame;
