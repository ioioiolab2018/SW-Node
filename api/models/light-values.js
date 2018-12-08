const bookshelf = require('../config/bookshelf');

const LightValue = bookshelf.Model.extend({
    tableName: 'light_values'
});

module.exports.create = value => {
    return new LightValue({
        lux: value.lux,
        name: value.name
    }).save();
};
