type Human = {
  name: string;
  age: number;
  knowsDev: boolean;
};

type Dev = Human & { knownLanguage: string };

function becomeADev(element: Human): Dev {
  const result: Dev = {
    name: element.name,
    age: element.age,
    knowsDev: true,
    knownLanguage: "JavaScript",
  };

  return result;
}
// const objetTest: Human = {
//   name: "nordine",
//   age: 26,
//   knowsDev: false,
// };
// const resu = becomeADev(objetTest);
// console.log(resu);

// Leave the line below for tests to work properly.
export { becomeADev };
