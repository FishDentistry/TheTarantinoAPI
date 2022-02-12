const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId
const assert = require('assert');
// Connection URL
const url = 'mongodb+srv://christian_fronk:Pigs123!@cluster0.np2cd.mongodb.net/tarantinoapi?retryWrites=true&w=majority';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  const db = client.db("tarantinoapi");
  db.collection('counts').insertOne({
    request_count: 0
  })
  .then(function(result) {
    // process result
    client.close();
  })
});



