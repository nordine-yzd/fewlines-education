import { assembleData } from "./assembleData";

const names: string[] = ["Frederic", "Paula", "Oscar"];
const ages: number[] = [28, 24, 31];
const countries: string[] = ["Canada", "India", "Guinea"];
const haveTraveled: boolean[] = [false, true, true];

const re = assembleData(names, ages, countries, haveTraveled);
console.log(re);
