const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// fonction random number betwen 0 to 2 (1,2,3)
function randomFunction (number = 2) {
  const random = Math.round(Math.random() * number);
  return random;
}
//fonction qui va verifier qui gagne
function checkWhoWon (choice, choiceCpu) {
  if (choice === choiceCpu){
    console.log("\ntie game\n");
  } else if ((choice > choiceCpu &&(choiceCpu+1)===choice) || (choice < choiceCpu && (choice + choiceCpu ===2) )) {
    console.log("the player won\n");
  } else {
    console.log("the Player loos\n");
  }
}
// clear the screen
const clear = () => console.log("\x1B[2J\x1B[0f");
//constantes qui contiennennt pierre feuilles ciseau en string(image)
const rock =
`      ________
  ---'   _   |
        (__(__)
        (_____)
        (____)
  ---.__(___)         \n`
;
const paper =
 `       _______
  ----'    ____)____
              _______)
              _______)
             _______)
  ----.__________)    \n`
;
const scissors = `
      ____
  ---'    |________
       (__)________)
          _________)
        (____)
  ---.__(___)
\n`;
const newArray = [rock,paper,scissors];

function shifumiVsIa () {
  console.log("Welcome to ShiFuMi");
//appel de la fonction random
  let random = randomFunction()
  let choice = 3;
  let choiceCpu = 3;
//fonction reader qui va recuperer le user input
  reader.question("Please choose a move\nRock Paper Scissors ? [1, 2, 3]\n> ", (move) => {
    console.log("Player move ");
    switch (move) {
      case "0":
        console.log(newArray[0]);
        choice = 0;
        // reader.close()
        break;
      case "1":
        console.log(newArray[1]);
        choice = 1;
        // reader.close()
        break;
      case "2":
        console.log(newArray[2]);
        choice = 2;
        // reader.close()
        break;
      default:
        setTimeout(function () {
          clear()
          shifumi();
        }, 2000);
        console.log("erreur answer try again  ");
        break;
    }
// deuxieme partie cote Cpu(IA)
    console.log("Cpu move ");
    switch (random) {
      case 0:
        console.log(newArray[0]);
        choiceCpu = 0;
        break;
      case 1:
        console.log(newArray[1]);
        choiceCpu= 1;
        break;
      case 2:
        console.log(newArray[2]);
        choiceCpu = 2;
        break;
      default:
        break;
    } ;
// troisieme partie algorithmie "qui gagne"
    checkWhoWon(choice, choiceCpu)
// rejouer "yes" or no
    reader.question("Play again ? :\ny or n \n> ", (answer1) => {
      // Handle the move
      switch (answer1) {
        case "y":
          shifumiVsIa();
          break;
        default:
          reader.close();
          break;
      }

    });

  });
}
shifumiVsIa()


// test du reader
// //age
// reader.question("quel est ton nom  ", (nom ) => {
// // prenom
//   reader.question("quel est ton prenom ", (prenom) => {

//     reader.question("quel est ton age ", (age) => {
//       // Handle the move
//       console.log(`Mon nom est ${nom} mon prenom est ${prenom} mon age est ${age}`);
//       shifumiVsIa()
//     });
//   });
// });

