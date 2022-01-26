const findPosition = (arrayOfString, string, number) => {
  // Code here
  let count = number;
  if (
    Array.isArray(arrayOfString) === true &&
    arrayOfString.every((e) => typeof e === "string") &&
    typeof string === "string" &&
    Number.isInteger(number) === true
  ) {
    if (arrayOfString.length === count && arrayOfString[count] !== string) {
      let str2 = `${string} is not present in this array.`;
      return str2;
    }

    if (arrayOfString[count] === string) {
      let str1 = `${string} is at position #${count + 1} in this array.`;
      // console.log(typeof str1 + "---------------------type of return dans la fonction");
      return str1;
    } else {
      count += 1;
      return findPosition(arrayOfString, string, count);
    }
  } else {
    throw new Error("parameter is not of its expected type. Expected array, string and number at parametre");
  }
};
// const result = findPosition(["Fenn", "Florian", "Martin", "Louis", "Thomas"], "Martin", 0);

// console.log(result);

module.exports = findPosition;
