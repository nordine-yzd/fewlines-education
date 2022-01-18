// const arr = [1, 2, 3, 4, 5];
// const tab = log(arr);
// const nume = [1];
// const num = log(nume);

// function log(number) {
//   console.log(`- ${number}`);
// }

function forEachLoop(array, func) {
  for (let index = 0; index < array.length; index++) {
    func(array[index]);
  }
}
// forEachLoop(arr, log);


// Do not remove the following lines, it is for tests
module.exports = forEachLoop;
