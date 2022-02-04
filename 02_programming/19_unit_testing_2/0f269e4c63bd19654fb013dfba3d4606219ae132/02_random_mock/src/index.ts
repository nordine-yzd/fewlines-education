export function getRandomUser(users: string[]): string {
  return users[Math.round(Math.random() * (users.length - 1))];
}
const a = getRandomUser(["Frieda", "Francis", "Frederic"]);
console.log(a);
const n = "abcd";
console.log(n.length);
