// Code here
// An anonymous function is a function without a name
let stealthyFuelLevelCheck = (fuel) => {
  if (fuel > 20) {
    return "Fuel level: green";
  } else if (fuel > 10) {
    return "Fuel level: yellow";
  } else {
    return "Fuel level: red";
  }
};

const stealthyCargoHoldCheck = (arrayCargo) => {
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
};

stealthyFuelLevelCheck(28);

// Do not remove last lines, it is for tests
module.exports = { stealthyFuelLevelCheck, stealthyCargoHoldCheck };
