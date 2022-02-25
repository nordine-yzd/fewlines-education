export function line(numberOfStars: number): string {
  const star = "*";
  let result = "";
  for (let i = 0; i < numberOfStars; i++) {
    result += star;
  }
  return result;
}
// const re = "e";
// const te = re + re;
// console.log(re);
// console.log(te);
