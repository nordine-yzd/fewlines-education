import { squareNumber } from "./squareNumber";

export function context(arrayOfNumbers: number[]): number[] {
  // Code the function here
  const arrayOfSquare: number[] = [];
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    arrayOfSquare.push(squareNumber(arrayOfNumbers[i]));
  }

  return arrayOfSquare;
}
