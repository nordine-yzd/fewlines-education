function triangle(num) {
  // Code here
  const star = "*";
  for (let i = 1; i < num + 1; i++) {
    console.log(star.repeat(i));
  }
}

// triangle(3);

// Do not remove the following line, it is for tests
module.exports = triangle;
