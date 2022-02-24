import "dotenv/config";

console.log(process.env.MONGODB_DATABASE_URL);

// // index.ts
// import { MongoClient } from "mongodb";
// const databaseUrl = process.env.MONGODB_DATABASE_URL || "";
// const client = new MongoClient(databaseUrl);
// client.connect().then((client) => {
//   const db = client.db();
//   // code here
//   const frida = {
//     firstName: "Frida",
//     lastName: "Ewlines",
//   };
//   db.collection("users")
//     .insertOne(frida)
//     .then(() => client.close());
// });
