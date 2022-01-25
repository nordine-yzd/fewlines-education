function checkFuelLevel(fuel) {
  // Code here
  if (fuel > 20) {
    return "Fuel level: green";
  } else if (fuel > 10) {
    return "Fuel level: yellow";
  } else {
    return "Fuel level: red";
  }
}
// checkFuelLevel(30);
function checkCargoHold(arrayCargo) {
  const i = 4;

  if (arrayCargo.length === i) {
    return "Full";
  } else if (arrayCargo.length < i) {
    let result = i;
    result -= arrayCargo.length;
    return `Spaces available: ${result}`;
  } else {
    let result = arrayCargo.length;
    result -= i;
    return `Over capacity by ${result} items.`;
  }
}
// checkCargoHold([1, 2, 3, 1, 2, 3, 4, 5, 6]);

// const tab = [1, 2, 3, 4, 5, 6, 7];
// let a = tab.length;
// console.log(typeof a); // => number
// console.log(a); // => 7
// a = a + 2;
// console.log(a); // => 9
// console.log(typeof a); // => number

// Do not remove last lines, it is for tests
module.exports = { checkFuelLevel, checkCargoHold };
