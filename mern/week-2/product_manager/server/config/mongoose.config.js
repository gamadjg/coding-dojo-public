const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/crmdb";

mongoose
	.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Established a connection to the database"))
	.catch((err) =>
		console.log("Something went wrong when connecting to the database", err)
	);
