export function column(numberOfLines: number, lineContent: string): string {
  let result = "";
  const char = lineContent;
  for (let i = 0; i < numberOfLines; i++) {
    //
    result += `${char}\n`;
  }
  return result;
}
