import { capitalize } from "./capitalize";

export function context(sentence: string): string {
  // Code here and use the function `capitalize` from exercise one
  let stringReturn: string = "";
  const arr: string[] = sentence.split(" ");

  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      stringReturn += `${capitalize(arr[i])}`;
    } else {
      stringReturn += `${capitalize(arr[i])} `;
    }
  }
  return stringReturn;
}

// console.log(context("james pond")); // Should print "James Bond"
