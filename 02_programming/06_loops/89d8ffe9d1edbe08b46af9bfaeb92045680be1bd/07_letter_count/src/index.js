function letterCount(word, char) {
  // Code here
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === char) {
      count += 1;
    }
  }
  return count;
}

// letterCount("salade", "a");

// Do not remove the following line, it is for tests
module.exports = letterCount;
