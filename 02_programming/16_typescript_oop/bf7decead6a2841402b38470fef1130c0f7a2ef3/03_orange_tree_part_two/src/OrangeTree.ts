import { Tree } from "./Tree";

// Code your class here.
class OrangeTree extends Tree {
  // Properties member.
  oranges: string[];
  // Constructor member.
  constructor(age: number) {
    super(age);
    this.oranges = this.growOranges();
  }
  // Methods member.
  ageOneYear(): number {
    return (this.age += 1);
    this.growOranges();
  }
  isAlive(): boolean {
    if (this.age >= 100) {
      return this.alive === false;
    }
    if (this.age > 50 && this.age < 100) {
      let die: number = 0;
      for (let i = 50; i < this.age; i++) {
        die = die + Math.floor(Math.random() * (51 - 1)) + 1;
      }
      if (die >= 100) {
        return this.alive === false;
      }
      return this.alive === true;
    }
  }
  growOranges(): string[] {
    this.oranges.push("🍊");
  }
  pickAnOrange(): void {
    // this.oranges.pop();
  }
}

const orange = new OrangeTree(5);
console.log(orange);
orange.ageOneYear();
console.log(orange);

// Leave the line below for tests to work properly.
export { OrangeTree };
