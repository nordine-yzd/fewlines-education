type Profile = {
  name: string;
  age: number;
  country: string;
  haveTraveled: boolean;
};

export function assembleData(names: string[], ages: number[], countries: string[], haveTraveled: boolean[]): Profile[] {
  // Code here
  const newProfile: Profile[] = [];
  // newProfile[0].age = 22;
  console.log(newProfile + " lignes 12 ");
  const first: Profile = { name: names[0], age: ages[0], country: countries[0], haveTraveled: haveTraveled[0] };
  const second: Profile = { name: names[1], age: ages[1], country: countries[1], haveTraveled: haveTraveled[1] };
  const tihrd: Profile = { name: names[2], age: ages[2], country: countries[2], haveTraveled: haveTraveled[2] };
  console.log("---------------------------------");

  // for (let i = 0; i < names.length; i++) {
  //   re.name = names[i];
  //   re.age = ages[i];
  //   re.country = countries[i];
  //   re.haveTraveled = haveTraveled[i];
  // }
  newProfile.push(first);
  newProfile.push(second);
  newProfile.push(tihrd);

  // console.log("conosle log ligne 28 " + newProfile);

  return newProfile;
}
