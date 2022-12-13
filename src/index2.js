const { MongoClient } = require('mongodb');

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('blog');
    const collection = db.collection('POST');

    // Find the first document in the collection
    const first = await collection.insertOne({title:"Movie", body:"Jab tak hai jaan", category:"romance/action"});
    console.log(first);
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}
run().catch(console.error);