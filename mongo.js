const mongoClient = require('mongodb').MongoClient;
// local database 
const url = 'mongodb://127.0.0.1:27017';
const dbname = 'mongo-test';

mongoClient.connect(url, {}, (error, client) => {
  if (error) console.log('Cannot connect to the database');

  const db = client.db(dbname);

  // users
  db.collection('users').insertOne({
    name: 'John',
    surname: 'Doe',
    age: 34,
  }, (error, result) => {
    if (error) console.log('Adding user error', error);

    console.log(result);
  });

  console.log('database connection ok');
});
