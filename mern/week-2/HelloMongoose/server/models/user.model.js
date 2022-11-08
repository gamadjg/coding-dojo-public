const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "name is required"],
			minlength: [2, "name must be at least 2 characters long"],
		},
		age: {
			type: Number,
			min: [1, "Age cannot be less than 1"],
			max: [150, "Cannot be more than 149 year old"],
		},
	},
	{ timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
