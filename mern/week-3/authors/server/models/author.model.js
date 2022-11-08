const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Author name cannot be empty."],
			minLength: [3, "Author's name cannot be less than 3 characters long."],
		},
	},
	{ timestamps: true }
);
module.exports.Author = mongoose.model("Author", AuthorSchema);
