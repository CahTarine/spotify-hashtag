// JavaScript Assincrono
// await async
// Fullfilled
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://fullstackjornada:tSUhPNmmqGH8GdGQ@cluster0.v1qra.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyHashtag");

// console.log(db);
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
