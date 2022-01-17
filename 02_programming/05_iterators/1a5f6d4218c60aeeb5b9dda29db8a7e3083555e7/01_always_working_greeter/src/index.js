const arr = ["Joe", "Mike", "Robert"];


function greeter(people) {
  return people.forEach(element => console.log(`Hello ${element}!`));
}

greeter(arr);

// Do not remove the following lines, it is for tests
module.exports = greeter;
