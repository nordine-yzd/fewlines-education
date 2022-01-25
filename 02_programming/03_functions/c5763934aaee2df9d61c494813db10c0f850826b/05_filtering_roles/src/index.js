function filteredRoles(array, role = "Teacher") {
  // Code the function here.
  let newArray = [];
  if (array[0].role === role) {
    newArray.push(array[0]);
  }
  if (array[1].role === role) {
    newArray.push(array[1]);
  }
  if (array[2].role === role) {
    newArray.push(array[2]);
  }
  if (array[3].role === role) {
    newArray.push(array[3]);
  }

  return newArray;
}

// Do not remove lines below, it is for tests
module.exports = filteredRoles;
