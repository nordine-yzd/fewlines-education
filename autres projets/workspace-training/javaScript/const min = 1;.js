const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// cree un prb qui a comme donée d'entrer le inputuser et qui affiche une log si l'user met le nombre 10
// fonction qui verifie si le user met le bon chiffre
function userInput(reader, param2) {
  reader.question("quel est le chiffre entre 1 et 20\n", (answer) => {
    console.log(`le chiffre saisi est : ` + answer);
    if (answer === param2) {
      console.log("bravo");
      reader.close();
    } else {
      console.log("faux");
      userInput(reader, param2);
    }
  });
}
//fonction qui va lancé le programme
function start(param1) {
  console.log("bienvenue dans le programme");
  userInput(param1, "10");
}

start(reader);
