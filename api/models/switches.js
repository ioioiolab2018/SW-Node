const bookshelf = require('../config/bookshelf');

const Switch = bookshelf.Model.extend({
    tableName: 'switches'
});

module.exports.update = switches => {
    return new Switch({
        pin: switches.pin,
        value: switches.value
    }).save();
};
