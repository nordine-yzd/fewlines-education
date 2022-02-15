import { Customer, customers } from "../data/customers";

export function filterByFirstLetterOrdered(param: Customer[], letter: string): Customer[] {
  // Code here
  const result: Customer[] = [];
  if (letter.length === 1) {
    param.forEach((element) => {
      if (element.last_name.charAt(0) === letter) {
        result.push(element);
      }
    });
  }
  result.sort(function (a, b) {
    if (a.last_name < b.last_name) {
      return -1;
    }
    if (a.last_name > b.last_name) {
      return 1;
    }
    return 0;
  });

  return result;
}

console.log(filterByFirstLetterOrdered(customers, "J")); // Should return an array with all last names starting with the letter "J"
