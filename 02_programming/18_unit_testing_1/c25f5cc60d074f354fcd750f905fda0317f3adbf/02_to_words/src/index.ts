export function toWords(sentence: string): string[] {
  const allWords = sentence.split(/[-.!, :]+/);
  // add "-" to regex

  return allWords.filter((word) => word !== "");
}
const result = toWords(".!, - :hello");
console.log(result);
// console.log(typeof result);
// if (Array.isArray(result) === true) {
//   console.log("trueeeeeeeeeee");
// } else {
//   console.log("falseeeeeeeeee");
// }
