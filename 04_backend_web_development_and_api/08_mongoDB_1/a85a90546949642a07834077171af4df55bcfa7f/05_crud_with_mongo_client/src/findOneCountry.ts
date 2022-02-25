import { Db } from "mongodb";

type Country = {
  name: string;
  capital: string;
  continent: string;
};

export async function findOneCountry(db: Db): Promise<Country> {
  // code your function here
  return db.collection<Country>("worldAtlas").findOne({ name: "Iceland" });
}

// const databaseUrl = process.env.MONGODB_DATABASE_URL || "";
// const client = new MongoClient(databaseUrl);
// const db = client.db();

// export function findOneCountry(db: Db) {
//   // code your function here
//   client.connect().then((client) => {
//     db.collection("worldAtlas")
//       .findOne({ firstName: "Iceland" })
//       .then((doc) => {
//         console.log(doc);
//         client.close();
//       });
//   });
// }
// async function hello(): Promise<string> {
//   return "Hello";
// }
// hello();

// hello().then((greeting) => {
//   // greeting = "Hello"
//   // console.log(greeting);
// });

// async function greeter(): Promise<void> {
//   const withoutAwait = hello(); // withoutAwait = Promise { "Hello" }
//   console.log(withoutAwait);

//   const withAwait = await hello(); // withAwait = "Hello"
//   console.log(withAwait);
// }
