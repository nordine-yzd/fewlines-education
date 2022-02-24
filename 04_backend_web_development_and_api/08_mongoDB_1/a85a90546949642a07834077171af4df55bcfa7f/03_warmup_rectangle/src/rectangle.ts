export function rectangle(width: number, height: number): string {
  const star = "*";
  let result = "";
  for (let i = 0; i < height; i++) {
    result += `${star.repeat(width)}\n`;
  }
  return result;
}

console.log(rectangle(4, 6));
