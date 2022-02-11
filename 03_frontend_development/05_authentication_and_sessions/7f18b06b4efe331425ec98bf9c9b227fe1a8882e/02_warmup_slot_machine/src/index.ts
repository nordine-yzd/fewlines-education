// Code here
export function slotMachine(tuple: [unknown, unknown, unknown]): boolean {
  let result: boolean;
  if (tuple[0] === tuple[1] && tuple[1] === tuple[2]) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// tuple: [string | number | boolean, string | number | boolean, string | number | boolean]

// const paylineOfStrings = ["🍒", "🍒", "🍒"];
// const paylineOfNumbers = [1, 1, 1];
// const losingPayline = [true, false, true];
// // // console.log(typeof paylineOfStrings);
// // // console.log(typeof paylineOfNumbers);
// // // console.log(typeof losingPayline);

// const paylineOfNumbers = [1, 1, 1];

// slotMachine(paylineOfNumbers); //return "true"

// const test = slotMachine(["🍒", "🍒", "🍒"]); //return "true"
// console.log(test);

// // slotMachine(paylineOfNumbers); //return "true"
// // // slotMachine(losingPayline); //return "false"
