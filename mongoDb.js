const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";

const dbName = "Detective";

async function getDb(){

    let connection = await MongoClient.connect(uri);
    let db = connection.db(dbName);
    return db;
}