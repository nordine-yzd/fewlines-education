function consecutiveCount(word, char) {
  // Code here

  let result = 0;
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === char) {
      count++;
    } else {
      if (result < count) {
        result = count;
        count = 0;
      } else {
        count = 0;
      }
    }
  }
  if (result < count) {
    result = count;
  }

  if (result === 0 && count === 1) {
    return 1;
  } else if (result === 0) {
    return 0;
  } else return result;
}

consecutiveCount("abcaaaba", "a"); // 3 (longest streak of `a` is `aaa`)
consecutiveCount("utuutuuuuutuu", "u"); // 5 (longuest streak of `u` is `uuuuu`)
consecutiveCount("azerty", "b"); // 0
consecutiveCount("azerty", "y"); // 1
consecutiveCount("aaabcaaba", "a"); // 3
consecutiveCount("utuutuuuuutuuuuuu", "u"); // 6
// Do not remove the following line, it is for tests
module.exports = consecutiveCount;
