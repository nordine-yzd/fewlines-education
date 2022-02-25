import { line } from "./line";
import { column } from "./column";

export function rectangle(width: number, height: number): string {
  const result = column(height, line(width));
  // for (let i = 0; i < height; i++) {
  //   //
  // }
  return result;
}

// console.log("A rectangle of 2 by 2");
// console.log(rectangle(2, 2));
// // Should print:
// // **
// // **

// console.log("\nline(2)");
// console.log(line(2));

// console.log("\ncolumn(2)");
// console.log(column(2, "*"));
