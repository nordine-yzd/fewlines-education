// code here
import { customers } from "../data/customers";
import { filterByFirstLetterOrdered } from "./filterByFirstLetterOrdered";

console.log(filterByFirstLetterOrdered(customers, "J")); // Should return an array with all last names starting with the letter "J" with alphabetical ordering
