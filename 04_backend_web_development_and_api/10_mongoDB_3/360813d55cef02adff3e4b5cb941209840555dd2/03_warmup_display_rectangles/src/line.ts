export function line(numberOfStars: number): string {
  const star = "*";
  let result = "";
  for (let i = 0; i < numberOfStars; i++) {
    result += star;
  }
  return result;
}
// console.log(line(2));
