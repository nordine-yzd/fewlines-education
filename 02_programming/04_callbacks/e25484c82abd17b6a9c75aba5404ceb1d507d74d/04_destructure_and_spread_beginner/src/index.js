let knowledge = {
  knowsJavascript: true,
  knowsTypescript: true,
  knowsReact: true,
  knowsNext: true,
  knowsMongoDB: true,
  timeSpent: "10 weeks",
};

let student = {
  hasComputer: true,
  knowsTypescript: false,
  knowsReact: false,
  knowsNext: false,
  knowsMongoDB: false,
  timeSpent: "4 days",
};

let developer = {
  ...student,
  ...knowledge,

  // give more knowledge to the student
};

console.log(developer);
let application = ["bug", "code", "code", "code", "code", "code", "code", "code", "code"];
let bug, code;
[bug, ...code] = ["bug", "code", "code", "code", "code", "code", "code", "code", "code"];

// code here

module.exports = {
  developer,
  bug,
  code,
};

// const amnesicJohn = {
//   firstName: "John",
//   lastName: "Doe",
// };
// const johnWithMemoryBack = {
//   ...amnesicJohn,
//   lastName: "Rambo",
// };
// console.log(johnWithMemoryBack);
