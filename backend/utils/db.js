import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

await client.connect();
console.log("Yay, connected!");

const db = client.db("users");
export default db;