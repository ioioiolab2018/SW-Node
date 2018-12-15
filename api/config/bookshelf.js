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
var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
// var bookshelf = require('bookshelf');

// bookshelf.DB = bookshelf.initialize({
//     client: 'sqlite3',
//     connection: {
//         // filename: '/home/pi/Databases/database.db'
//         // filename: 'C:/Users/Piotr/Desktop/database.db'
//         filename: '../../../database.db',
//         useNullAsDefault: true
//     }
// });

// module.exports = bookshelf