// Here are some examples

let storageHell = [
  [],
  ["IPad", "IPhone"],
  ["GameBoy color"],
  ["Nes", "Donkey kong 64"],
  ["Apex Legends Starter Pack", "LG 5K 27p screen"],
  ["Coffee Machine", "Azelad"],
];
// Should be cleaned this way => ['IPad', 'IPhone', 'GameBoy color', 'Nes', 'Donkey kong 64', 'Apex Legends Starter Pack', 'LG 5K 27p screen', 'Coffee Machine', 'Azelad']

// vu que c'est un tableau qui contient des tableaus on rajoute []
function formatStorage(storage) {
  // Code your function here
  return [...storage[0], ...storage[1], ...storage[2], ...storage[3], ...storage[4], ...storage[5]];
}

// ↓ Feel free to uncomment this next line, or even create more to try everything you do ↓
console.log(formatStorage(storageHell));

// Don't modify this, it is for the tests.
module.exports = formatStorage;
