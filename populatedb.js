const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId
const assert = require('assert');
// Connection URL
const url = 'mongodb+srv://christian_fronk:Pigs123!@cluster0.np2cd.mongodb.net/tarantinoapi?retryWrites=true&w=majority';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  const db = client.db("tarantinoapi");
  db.collection('characters').insertOne({
    first_name: "Beatrix" ,
    last_name: "Kiddo" ,
    movies_in: [ObjectId("61f0c124eaa168bf5d3f567d"),ObjectId("61f0c175a253423c81588716")],
    played_by: "Uma Thurman"
  })
  .then(function(result) {
    // process result
    client.close();
  })
});



