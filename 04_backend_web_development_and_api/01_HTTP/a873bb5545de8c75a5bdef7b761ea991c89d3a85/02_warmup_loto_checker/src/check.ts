import { lottery_draw } from "./lottery_draw";
import { Draw } from "./types";

export function checkIfIWon(ticket: Draw): void {
  // Code the function here
  const randomArray = lottery_draw();
  console.log(randomArray + " ------------- randomArray");
  console.log(ticket + " ---------------- ticket");

  if (JSON.stringify(randomArray) == JSON.stringify(ticket)) {
    console.log("You won the lottery!");
  } else {
    console.log("You lost...");
  }
}

// checkIfIWon([1, 2, 3]);
