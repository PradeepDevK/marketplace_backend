/* jshint node: true */
/* jshint esnext: true */
'use strict';

/**
 * This class contains methods to connect and disconnect from mongo db
 */
const mongoose = require('mongoose'); // Library of mongo

const { dbPassword, stage, region } = process.env;
const IsProduction = stage === 'beta' && stage !== undefined;

let connectionString;
const connections = {};

switch (true) {
  case IsProduction:
    break;
  default:
    connectionString = `mongodb+srv://sysadmin:${dbPassword}@atlascluster.oma9w9g.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster`;
}

console.log(`Proccess runing like Production: ${IsProduction}`);

class mongooseDB {
  static async getConnection(dbName, mongodbUri, optionsConnection) {
    const _dbName = dbName;
    const _mongodbUri = mongodbUri || connectionString.replace('dbName', dbName);
    const _optionsConnection = optionsConnection || {
      useNewUrlParser: true, //after version 5.x
      useUnifiedTopology: true, //after version 5.x, for server discovery and monitoring engine
      useCreateIndex: true, //after version 5.x
      useFindAndModify: false, //version updates
      poolSize: 100, // Maintain up to 100 socket connections
      serverSelectionTimeoutMS: 30000, // Keep trying to send operations for 30 seconds
      socketTimeoutMS: 300000, // Close sockets after 30 seconds of inactivity
    };

    let _connectionDB;
    if (connections[_dbName]) {
      _connectionDB = connections[_dbName];
    } else {
      connections[_dbName] = await mongoose.createConnection(
        _mongodbUri,
        _optionsConnection
      );
      _connectionDB = connections[_dbName];
    }

    console.log(`MongoDB connections count: `, Object.keys(connections).length);

    return _connectionDB;
  }
}

module.exports = mongooseDB;
