// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').deleteMany({text: "Water the tulips"}).then((result) => {
  //   console.log(result);
  // });
  //
  // db.collection('Todos').deleteOne({text: "Water the tulips"}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: "Kevin"}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users')
  // .findOneAndDelete({
  //   id: new ObjectID("5b3824305380e461fec4f6bd")})
  //   .then((result) => {
  //     console.log(result);
  //   });

  // client.close();
});
