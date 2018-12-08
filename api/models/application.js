const bookshelf = require('../config/bookshelf');

const Application = bookshelf.Model.extend({
    tableName: 'tableName'
});

module.exports.create = application => {
    return new Application({
        row: application.row,
        row2: application.row2
    }).save();
};
