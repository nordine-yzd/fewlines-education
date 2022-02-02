type ReceivedObject = {
  a: string;
  b: number;
};
// const receivedObject = {
//   a: "somestring",
//   b: 42,
// };

function transformObject(receivedObject: ReceivedObject): (string | number)[] {
  const result = [];
  result.push(receivedObject.a);
  result.push(receivedObject.b);

  return result;
}
// Leave the line below for tests to work properly.
export { transformObject };
