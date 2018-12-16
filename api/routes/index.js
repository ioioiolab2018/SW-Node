const express = require("express");
const router = express.Router();

var dbConfig = {
	client: "sqlite3",
	connection: {
		filename: "../../database.db"
	},
	useNullAsDefault: true
};

var knex = require("knex")(dbConfig);
var bookshelf = require("bookshelf")(knex);

var LightConfiguration = bookshelf.Model.extend({
	tableName: "lightSettings"
});
// const LightConfigurations = require("../models/light-settings");

var TemperatureConfiguration = bookshelf.Model.extend({
	tableName: "tempSettings"
});
// const TemperatureConfigurations = require("../models/light-settings");

var SwitchConfiguration = bookshelf.Model.extend({
	tableName: "switches"
});

const PagesController = require("../controllers/PagesController");
// const ApplicationsController = require('../controllers/ApplicationsController');

router.get("/api/light-configurations", function(req, res) {
	new LightConfiguration()
		.fetchAll()
		.then(function(articles) {
			res.send(articles.toJSON());
		})
		.catch(function(error) {
			console.log(error);
			res.send("An error occured");
		});
});

router.post("/api/light-configuration", function(req, res) {
	new LightConfiguration(req.body)
		.save()
		.then(function(lightDevice) {
			console.log("Save:", lightDevice.toJSON());
		})
		.catch(function(error) {
			console.log(error);
			res.send("An error occured");
		});
});

router.get("/api/temperature-configurations", function(req, res) {
	new TemperatureConfiguration()
		.fetchAll()
		.then(function(articles) {
			res.send(articles.toJSON());
		})
		.catch(function(error) {
			console.log(error);
			res.send("An error occured");
		});
});

router.post("/api/temperature-configuration", function(req, res) {
	new TemperatureConfiguration(req.body)
		.save()
		.then(function(lightDevice) {
			console.log("Save:", lightDevice.toJSON());
		})
		.catch(function(error) {
			console.log(error);
			res.send("An error occured");
		});
});

router.get("/api/switches", function(req, res) {
	new SwitchConfiguration()
		.fetchAll()
		.then(function(articles) {
			res.send(articles.toJSON());
		})
		.catch(function(error) {
			console.log(error);
			res.send("An error occured");
		});
});

router.post("/api/switch", function(req, res) {
	new SwitchConfiguration(req.body)
		.save()
		.then(function(lightDevice) {
			console.log("Save:", lightDevice.toJSON());
		})
		.catch(function(error) {
			console.log(error);
			res.send("An error occured");
		});
});

router.get("*", PagesController.home);

module.exports = router;
