const person = {
  firstname: "Abdel",
  lastname: "Sadki",
  age: 42,
  fullname: function () {
    return `${this.firstname} ${this.lastname}`;
  },
  // Complete here
  introduceMyself: function () {
    return `Hello! I'm ${this.firstname} ${this.lastname} and I'm ${this.age}.`;
  },
};
// const rr = person.fullname();
// const re = person.introduceMyself();
// console.log(re);
// console.log(rr);

module.exports = person;
