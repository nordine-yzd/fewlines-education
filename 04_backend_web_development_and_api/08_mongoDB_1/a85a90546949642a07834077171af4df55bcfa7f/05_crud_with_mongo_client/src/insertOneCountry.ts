import { Db, MongoClient, ObjectId } from "mongodb";

type Country = {
  _id: string;
  name: string;
  capital: string;
  continent: string;
};

export async function insertOneCountry(db: Db, country: Country): Promise<string> {
  // code your function here
  return db
    .collection<Country>("worldAtlas")
    .insertOne(country)
    .then((result) => result.insertedId);
}
