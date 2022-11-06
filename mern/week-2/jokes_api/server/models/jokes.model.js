const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
	{
		setup: {
			type: String,
			required: [true, "Can't have a joke withough the setup."],
		},
		punchline: {
			type: String,
			required: [true, "Jokes with no punchline can't exist... right?"],
		},
	},
	{ timestamps: true }
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;
