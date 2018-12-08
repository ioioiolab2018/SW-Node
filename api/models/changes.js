const bookshelf = require('../config/bookshelf');

const Change = bookshelf.Model.extend({
    tableName: 'changes'
});

module.exports.update = value => {
    return new Change({
        id: 1,
        change: value
    }).save();
};
