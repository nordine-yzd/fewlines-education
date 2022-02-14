import { Draw } from "./types";

export function lottery_draw(): Draw {
  // Math.round(Math.random() * (max - min) + min); //betwin min and max
  const result: number[] = [];
  for (let i = 0; i < 3; i++) {
    result.push(Math.round(Math.random() * (3 - 0) + 0));
  }
  return result;
}

const randomArray = lottery_draw();
console.log(randomArray);
