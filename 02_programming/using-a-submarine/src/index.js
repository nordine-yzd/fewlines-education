// import du tableau dans le fichier movements.js
import { movements } from "./movements.js";

// code here
function partOne(array) {
  let finalPosition = 0;
  let sumDepth = 0;
  let sumHorizontal = 0;
  for (let i = 0; i < array.length; i++) {
    let split = array[i].split(" ");
    if (split[0] === "forward") {
      sumHorizontal += parseInt(split[1]);
    } else if (split[0] === "down") {
      sumDepth += parseInt(split[1]);
    } else if (split[0] === "up") {
      sumDepth -= parseInt(split[1]);
    }
  }
  finalPosition = sumDepth * sumHorizontal;
  return console.log(`Final position : ${finalPosition}`);
}

//test fonction 1
// partOne(movements);

//-----------------------PART 2----------------------------//

const movement = [
  "forward 5",
  "down 5",
  "forward 8",
  "up 3",
  "down 8",
  "forward 2",
]; // up = 9,  down = 8,  forward = 12   depth = 8

// fonction question 2
function partTwo(array) {
  let finalPosition = 0;
  let sumDepth = 0;
  let sumHorizontal = 0;
  let sumAim = 0;

  for (let i = 0; i < array.length; i++) {
    let split = array[i].split(" ");
    if (split[0] === "forward") {
      sumHorizontal += parseInt(split[1]);
      if (sumAim !== 0) {
        // sumAim += parseInt(split[1]);
        sumDepth += sumAim * parseInt(split[1]);
      }
    } else if (split[0] === "down") {
      // sumDepth += parseInt(split[1]);
      sumAim += parseInt(split[1]);
    } else if (split[0] === "up") {
      // sumDepth -= parseInt(split[1]);
      sumAim -= parseInt(split[1]);
    }
    console.log(
      "-------------------------------- " + finalPosition + " finalPosition"
    );
    console.log("-------------------------------- " + sumDepth + " sumDepth");
    console.log(
      "-------------------------------- " + sumHorizontal + " sumHorizontal"
    );
    console.log("-------------------------------- " + sumAim + " sumAim");
    console.log("fin du tour /////////////////////////////////////////////");
  }
  console.log(finalPosition + " finalPosition");
  console.log(sumDepth + " sumDepth");
  console.log(sumHorizontal + " sumHorizontal");
  console.log(sumAim + " sumAim");
  finalPosition = sumDepth * sumHorizontal;
  console.log("-------------------------------------");
  console.log(finalPosition + " finalPosition");
  console.log(sumDepth + " sumDepth");
  console.log(sumHorizontal + " sumHorizontal");
  console.log(sumAim + " sumAim");
  return console.log(`Final position : ${finalPosition}`);
}

partTwo(movement);
