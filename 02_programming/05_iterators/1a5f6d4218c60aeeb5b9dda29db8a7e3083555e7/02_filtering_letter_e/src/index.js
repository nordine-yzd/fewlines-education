function theEFilter(sentences) {
  return sentences.filter(e => e.includes("e") || e.includes("E"));

  // if (sentences.includes("E") || sentences.includes("e") === true) {
  //   return console.log(sentences);
  // }
  // sentences.forEach(word => {
  //   const result = sentences.filter(e => e.includes("e") || e.includes("E"));
  //   return console.log(result);
  // });
}
const sentence = ["LorEm", "dolor ", "e"];

theEFilter(sentence);


// Do not remove the following line, it is for tests
module.exports = theEFilter;
