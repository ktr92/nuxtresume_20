

const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI; 
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


export async function handler(event, context) {
  
  try {

    await client.connect();
    const database = client.db('myFirstDatabase'); 
    const collection = database.collection('projects'); 

    const projects = await collection.find().sort({prsort: 1})
    res.status(200).json(projects)
    console.log(projects)

    return {
      statusCode: 200,
      body: JSON.stringify(projects),
    };

  } catch (error) {
    res.status(500).json(error)
  } finally {
    // Закрываем соединение с MongoDB
    await client.close();
  }



 
}