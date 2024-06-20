const { MongoClient } = require('mongodb');
     const uri = process.env.MONGO_URI;
   
     exports.handler = async function(event, context) {
       console.log("Функция запущена");
       console.log("URI:", uri);
   
       try {
         const client = new MongoClient(uri);
         console.log("Подключение к MongoDB...");
         await client.connect();
         const database = client.db('myFirstDatabase');
         const projects = database.collection('projects');
         const result = await projects.find({}).sort({prsort: 1}).toArray();
         console.log("Результат:", result);
   
         // Явно возвращаем данные
         return {
           statusCode: 200,
           body: JSON.stringify(result),
         };
       } catch (error) {
         console.error("Ошибка:", error);
         return {
           statusCode: 500,
           body: JSON.stringify({ error: 'Ошибка сервера' }),
         };
       }
     };