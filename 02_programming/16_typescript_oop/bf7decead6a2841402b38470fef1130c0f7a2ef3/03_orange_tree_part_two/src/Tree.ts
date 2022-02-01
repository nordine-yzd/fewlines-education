// Paste your previous `Tree` class here.
class Tree {
  // Properties member.
  age: number;
  height: number;
  alive: boolean = true;
  // Constructor member.
  constructor(age: number) {
    this.age = age;
    this.height = this.heightComputation();
  }
  // Methods member.
  heightComputation(): number {
    if (this.age <= 0) {
      return (this.height = 0);
    } else if (this.age >= 1 && this.age <= 9) {
      return (this.height = this.age * 25);
    } else if (this.age >= 10 && this.age <= 20) {
      let rest: number = 0;
      rest = (20 - this.age) * 10;
      return (this.height = 335 - rest);
    }
  }
  seed(): void {
    this.age = 0;
    this.height = 0;
    this.alive = true;
  }
}

// const orange = new Tree(5);
// console.log(orange + " orange ");
// orange.heightComputation();
// console.log(orange);

// Leave the line below for tests to work properly.
export { Tree };
