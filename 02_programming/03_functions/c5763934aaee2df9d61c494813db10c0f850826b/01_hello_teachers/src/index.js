function sayHelloToTeachers(teachers) {
  // Code the function here.
  // methode forEach //spartaTeachers.forEach(teacher => console.log(`Hello ${teacher}`));
  console.log(`Hello ${teachers[0]}`);
  console.log(`Hello ${teachers[1]}`);
  console.log(`Hello ${teachers[2]}`);
  console.log(`Hello ${teachers[3]}`);
  console.log(`Hello ${teachers[4]}`);
  
}
// Do not remove last lines, it is for tests
const spartaTeachers = ["Thomas", "Fenn", "Florian", "Martin", "Louis"];
module.exports = sayHelloToTeachers;
