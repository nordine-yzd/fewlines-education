type Draw = number[];

export function lottery_draw(): Draw {
  // Math.round(Math.random() * (max - min) + min); //betwin min and max
  const result: number[] = [];
  for (let i = 0; i < 6; i++) {
    result.push(Math.round(Math.random() * (100 - 0) + 0));
  }
  return result;
}
