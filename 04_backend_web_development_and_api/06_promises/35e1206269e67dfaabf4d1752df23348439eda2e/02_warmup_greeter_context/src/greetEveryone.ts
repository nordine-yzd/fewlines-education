// Copy your function greetEveryone here
type ParamRest = string[];

export function greetEveryone(...strLog: ParamRest): void {
  // Code your function here
  strLog.forEach((element) => {
    console.log(`Welcome to ${element}`);
  });
}
