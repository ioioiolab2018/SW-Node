const express = require('express');
const router = express.Router();

const PagesController = require('../controllers/PagesController');
const LightSettings = require('../controllers/LightSettings');
// const ApplicationsController = require('../controllers/ApplicationsController');

router.get('/', PagesController.home);

router.get('/api/light-config', LightSettings.fetchAll);

// router.post(
//     '/applications',
//     ApplicationsController.normalizeData,
//     ApplicationsController.store
// );

module.exports = router;
