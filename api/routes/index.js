const express = require("express");
const router = express.Router();

var dbConfig = {
	client: "sqlite3",
	connection: {
		// filename: '/home/pi/Databases/database.db'
		// filename: 'C:/Users/Piotr/Desktop/database.db'
		filename: "../../database.db"
	},
	useNullAsDefault: true
};

var knex = require("knex")(dbConfig);
var bookshelf = require("bookshelf")(knex);

var LightSetting = bookshelf.Model.extend({
	tableName: "lightSettings"
});

const PagesController = require("../controllers/PagesController");
const LightSettings = require("../models/light-settings");
// const ApplicationsController = require('../controllers/ApplicationsController');

router.get("/api/lights-configuration", function(req, res) {
	new LightSetting()
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
	new LightSetting(req.body)
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
