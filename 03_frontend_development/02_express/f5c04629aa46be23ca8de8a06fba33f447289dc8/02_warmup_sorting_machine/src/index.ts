const numArray = [10000, 104, 99, 2000, 3000, 1500];

// Code here

export function sortingMachine(arrNumber: number[], order: boolean): number[] {
  arrNumber = arrNumber.sort(function (a, b) {
    if (order === true) {
      return a - b;
    } else {
      return b - a;
    }
  });
  return arrNumber;
}

console.log(sortingMachine(numArray, false));
