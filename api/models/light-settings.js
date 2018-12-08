const bookshelf = require('../config/bookshelf');

const LightSetting = bookshelf.Model.extend({
    tableName: 'light_settings'
});

module.exports.create = setting => {
    return new LightSetting({
        lux: setting.lux,
        pin: setting.pin,
        name: setting.name
    }).save();
};

module.exports.update = setting => {
    return new LightSetting({
        id: setting.id,
        lux: setting.lux,
        pin: setting.pin,
        name: setting.name
    }).save();
};
