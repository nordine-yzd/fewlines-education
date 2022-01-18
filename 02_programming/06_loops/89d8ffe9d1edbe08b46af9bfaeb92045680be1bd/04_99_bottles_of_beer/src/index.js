function sing() {
  // code here
  let arr = [];
  for (let i = 99; i > 0; i--) {
    switch (i) {
      case 1:
        arr.push(
          `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`,
        );
        break;
      case 2:
        arr.push(
          `1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\n`,
        );
        break;
      default:
        arr.push(
          `${i} bottles of beer on the wall, ${i} bottles of beer. \n Take one down and pass it around, ${
            i - 1
          } bottles of beer on the wall.\n`,
        );
        break;
    }
  }
  return arr;
}

// Do not remove the following line, it is for tests
module.exports = sing;
