// Complete and add needed car properties:
const car = {
  speed: 0,
  minute: 0,
  distance: 0,
  cumulDistance: 0,
  start: function () {
    this.speed = 0;
    this.minute = 0;
    this.distance = 0;
    this.cumulDistance = 0;
    return this;
  },
  changeSpeed: function (kmh) {
    this.speed = kmh;
    // console.log("change speed", this.cumulDistance);
    return this;
  },
  drive: function (minute) {
    this.minute = minute;
    this.distance = (this.speed / 60) * this.minute;
    // this.cumulDistance += this.distance;
    // console.log("drive methode ", this.cumulDistance);
    this.cumulDistance += this.distance;
    return this;
  },
  showDistance: function () {
    console.log(`${this.cumulDistance} Km`);
    return this;
  },
};

// expect 242,5
// car.start().changeSpeed(130).drive(45).changeSpeed(50).drive(30).changeSpeed(90).drive(80).showDistance();
// car.start().changeSpeed(130).drive(42).showDistance().changeSpeed(100).drive(60).showDistance();
// expect 101 km
// car.start().changeSpeed(130).drive(45).changeSpeed(50).drive(30).changeSpeed(90).drive(80).showDistance();

// -------------test speed----------------
// console.log(car.speed);
// car.changeSpeed(120);
// console.log(car.speed);
// car.start();
// console.log(car.speed);

// --------------test minute-------------
// console.log(car.drive(42));

// car.start().changeSpeed(130).drive(45).showDistance().changeSpeed(50).drive(30).showDistance();
// changeSpeed(50).drive(30).changeSpeed(90).drive(80).showDistance();

// car.start().changeSpeed(130).drive(42).showDistance();

module.exports = car;
