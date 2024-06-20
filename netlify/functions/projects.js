const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI; // Получаем URI из переменной окружения
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

exports.handler = async function(event, context) {
  try {
    // Подключаемся к MongoDB
    await client.connect();
    const database = client.db('myFirstDatabase'); // Замените 'your-database-name' на имя вашей базы данных
    const collection = database.collection('project'); // Замените 'projects' на имя вашей коллекции

    // Получаем данные из MongoDB (например, все проекты)
    const projects = await collection.find({}).toArray();

    // Возвращаем данные в формате JSON
    return {
      statusCode: 200,
      body: JSON.stringify(projects),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch projects' }),
    };
  } finally {
    // Закрываем соединение с MongoDB
    await client.close();
  }
};
