var MongoClient = require('mongodb');
var url = "mongodb://admin:example@node-db:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("customers", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });

  exports.default =  MongoClient