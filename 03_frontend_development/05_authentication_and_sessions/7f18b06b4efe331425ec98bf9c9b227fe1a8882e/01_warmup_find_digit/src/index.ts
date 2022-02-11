// Code here
export function findDigit(arrayNum: number[], digit: number): number[] {
  const result: number[] = [];
  arrayNum.forEach((element) => {
    if (element.toString().includes(digit.toString())) {
      result.push(element);
    }
  });
  return result;
}

const anArrayOfNumbers: number[] = [1, 92, 824];
const r = findDigit(anArrayOfNumbers, 3); //return [92, 824]
console.log(r);
