// const arraysIntoObjects = (keysArray = { cle1: valeur1 }, valuesArray = { cle2: valeur1 }) => {

const arraysIntoObjects = (keysArray, valuesArray) => {
  /// Code your function here
  const newObject = new Object();
  // or //   const newObject = {};
  for (let index = 0; index < keysArray.length; index++) {
    let cle = keysArray[index];
    let valeur = valuesArray[index];
    newObject[cle] = valeur;
  }
  return newObject;
};

// Don't change this line for tests to run properly
export default arraysIntoObjects;
