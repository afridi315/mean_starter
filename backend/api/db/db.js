const mongoose = require("mongoose");
const { providerModel } = require("../models/model");

//Connection URI to MongoDB
const uri = "mongodb://localhost:27017/meanstackdb";

//Make db connection (async)
mongoose
	.connect(uri)
	.then((result) => {
		console.log("Connection successful!");
	})
	.catch((error) => console.log(error));

module.exports = providerModel;