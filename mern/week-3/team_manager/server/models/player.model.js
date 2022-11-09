const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
	1: String,
	2: String,
	3: String,
});
const PlayerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Player name cannot be empty."],
		minLength: [3, "Player's name cannot be less than 3 characters long."],
	},
	position: String,
	games: GameSchema,
});

module.exports.Player = mongoose.model("Player", PlayerSchema);
