const bookshelf = require('../config/bookshelf');

const TemperatureValue = bookshelf.Model.extend({
    tableName: 'temp_values'
});

module.exports.create = value => {
    return new TemperatureValue({
        name: value.name,
        name: value.temperature,
        name: value.humidity
    }).save();
};
