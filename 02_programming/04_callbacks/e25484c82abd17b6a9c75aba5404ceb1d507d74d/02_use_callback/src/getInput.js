// A function getInput that takes two parameters, an input (the first one) and a callback function
function getInput(userInput, callback) {
  callback(userInput.key);
}

// Leave the line below for tests to work
module.exports = getInput;
