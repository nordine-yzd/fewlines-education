import { Customer } from "../data/customers";

export function filterByFirstLetter(param: Customer[], letter: string): Customer[] {
  // Code here
  const result: Customer[] = [];
  if (letter.length === 1) {
    param.forEach((element) => {
      if (element.last_name.charAt(0) === letter) {
        result.push(element);
      }
    });

    result.push();
  }

  return result;
}
