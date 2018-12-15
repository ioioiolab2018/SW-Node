var dbConfig = {
    client: 'sqlite3',
    connection: {
        // filename: '/home/pi/Databases/database.db'
        // filename: 'C:/Users/Piotr/Desktop/database.db'
        filename: '../../../database.db',
    },
    useNullAsDefault: true
  };


var knex = require('knex')(dbConfig);

module.exports = knex;
