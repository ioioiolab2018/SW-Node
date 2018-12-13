const bookshelf = require('../config/bookshelf');

const LightSetting = bookshelf.Model.extend({
    tableName: 'lightsettings'
});

const LightSettings = bookshelf.Collection.extend({
    model: LightSetting
});

module.exports.create = setting => {
    return new LightSetting({
        name: setting.name,
        pin: setting.pin,
        lux: setting.lux
    }).save();
};

module.exports.update = setting => {
    return new LightSetting({
        id: setting.id,
        name: setting.name,
        pin: setting.pin,
        lux: setting.lux
    }).save();
};

module.exports.get = () => {
    // return [{ val: 'OK' }, { val: 'OK' }]
    // console.log(LightSetting().collection());
    return LightSettings().fetch();
};
