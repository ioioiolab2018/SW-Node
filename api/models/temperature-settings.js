const bookshelf = require('../config/bookshelf');

const TemperatureSetting = bookshelf.Model.extend({
    tableName: 'temp_settings'
});

module.exports.create = setting => {
    return new TemperatureSetting({
        name: setting.name,
        pin: setting.pin
    }).save();
};

module.exports.update = setting => {
    return new TemperatureSetting({
        id: setting.id,
        name: setting.name,
        pin: setting.pin
    }).save();
};
