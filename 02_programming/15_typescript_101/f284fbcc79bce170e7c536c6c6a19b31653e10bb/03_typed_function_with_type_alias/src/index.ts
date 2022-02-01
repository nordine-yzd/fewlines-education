type MyTuple = [string, number];

function handleTuple(tuple: MyTuple): void {
  // Code the function here.
  if (typeof tuple[0] === "string" && typeof tuple[1] === "number") {
    console.log(`${tuple[0]} is a ${typeof tuple[0]}`);
    console.log(`${tuple[1]} is a ${typeof tuple[1]}`);
  }
}

handleTuple(["foo", 42]);
// const tuple: [string, number] = ["hello", 10];

// Leave the line below for tests to work properly.
// export { handleTuple };

// function handleTuple(...tuple: [string, number]): void {
//   // Code the function here.
//   console.log(`${string} is a string\n${Number} is a number`);
// }

// const a: number = 1;
// console.log(`${a} is a ${typeof a}`);
export { handleTuple };

// const tuple: [string, number] = ["hello", 10];
// console.log(tuple);
// console.log(tuple[0]);
