type Person = {
  firstName: string;
  lastName: string;
};

export function parseName(name: string): Person {
  const spliter = name.split(" ");
  const newPerson: Person = {
    firstName: spliter[0],
    lastName: spliter[1],
  };
  return newPerson;
}
