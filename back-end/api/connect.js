import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://camilletarineestagio:tSUhPNmmqGH8GdGQ@cluster0.wkkqa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyHashtag");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(db);
