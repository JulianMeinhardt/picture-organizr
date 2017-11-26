// TODO: Should handle db connection settings
const mongoose = require('mongoose');

let db;
const connectToDatabase = () => new Promise((resolve, reject) => {
  if (db) {
    return db;
  }
  mongoose.Promise = global.Promise;

        // database connect needs to be configured in future
        // mongoose.connect('mongodb://' + config.db_config.host + ":" + config.db_config.port + "/" + config.db_config.name)
  mongoose.connect('mongodb://localhost:27017/picture-organizr')
            .then(() => {
              console.log('mongo connection created');
              resolve(db);
            })
            .catch((err) => {
              console.log(`error creating db connection: ${err}`);
              reject(db);
            });
});
module.exports = connectToDatabase;
