const mongoose = require("mongoose");
url = "mongodb://127.0.0.1:27017/Jokes_db";

mongoose
	.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Established a connection to the database"))
	.catch((err) =>
		console.log("Something went wrong when connecting to the database", err)
	);
