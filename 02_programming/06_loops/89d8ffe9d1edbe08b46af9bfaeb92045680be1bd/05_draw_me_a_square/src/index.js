function square(number) {
  // Code here
  const star = "*";
  for (let i = 0; i < number; i++) {
    console.log(star.repeat(number));
  }
}

// square(5);

// Do not remove the following line, it is for tests
module.exports = square;
