var dbConfig = {
    client: 'sqlite3',
    connection: {
        filename: '../../database.db',
    },
    useNullAsDefault: true
  };

var knex = require('knex')(dbConfig);
var bookshelf = require('bookshelf')(knex);
var LightSetting = bookshelf.Model.extend({
    tableName: "lightSettings"
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

module.exports.get = (req, res) => {
    new LightSetting().fetchAll()
      .then(function(articles) {
        res.send(articles.toJSON());
      }).catch(function(error) {
        console.log(error);
        res.send('An error occured');
      });
};
