var LightSettings = require('../models/light-settings');

// // Store new application
exports.fetchAll = (req, res) => {
    LightSettings.get().then(function (collection) {
        res.json(collection);
    }).catch(function (error) {
        res.status(500).json({ message: 'Database error!', val: error.message });
    });
};

// // Normalize form data
// exports.normalizeData = (req, res, next) => {
//     const nameArr = req.body.name.split(' ');

//     req.body.first_name = nameArr.shift();
//     req.body.last_name = nameArr.join();

//     next();
// };
