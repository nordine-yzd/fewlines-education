function sing() {
  let arr = [];
  for (let i = 99; i >= 0; i--) {
    switch (i) {
      case 0:
        arr.push("No more bottles of beer on the wall, no more bottles of beer.");
        arr.push("Go to the store and buy some more, 99 bottles of beer on the wall.");
        break;
      case 1:
        arr.push("1 bottle of beer on the wall, 1 bottle of beer.");
        arr.push("Take one down and pass it around, no more bottles of beer on the wall.");
        break;
      case 2:
        arr.push("2 bottle of beer on the wall, 2 bottle of beer.");
        arr.push("Take one down and pass it around, 1 bottle of beer on the wall.");
        break;
      default:
        arr.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
        arr.push(`Take one down and pass it around, ${i - 1} bottles of beer on the wall.`);
        break;
    }
  }
  return arr;
}
console.log(sing());

// Do not remove the following line, it is for tests
module.exports = sing;
