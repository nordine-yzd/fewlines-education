const machine = {
  // Complete here
  litre: 0,
  fillWithLitersOfCoffee: function (litre) {
    this.litre += litre;
    return this;
  },
  litersOfCoffee: function () {
    return console.log(`${this.litre}`);
  },
  expresso: function () {
    this.litre -= 0.08;
    return true;
  },
  longCoffee: function () {
    this.litre -= 0.08;
    return true;
  },
};
machine.fillWithLitersOfCoffee(10);
console.log(machine.litersOfCoffee); // => 10
console.log(machine.expresso()); // => true
console.log(machine.litersOfCoffee); // => 9.92
console.log(machine.longCoffee()); // => true
console.log(machine.litersOfCoffee); // => 9.77

module.exports = machine;
