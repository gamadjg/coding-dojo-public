const { Player } = require("../models/player.model");

module.exports.getAll = (req, res) => {
	Player.find()
		.then((allPlayers) => res.json(allPlayers))
		.catch((err) =>
			res.json({ message: "ERROR, GET: Cannot get all players.", error: err })
		);
};

module.exports.getOne = (req, res) => {
	Player.findOne({ _id: req.params.id })
		.then((player) => res.json({ player: player }))
		.catch((err) =>
			res.json({ message: "ERROR, GET: Cannot get player.", error: err })
		);
};

module.exports.create = (req, res) => {
	const { name, position } = req.body;
	Player.create({
		name,
		position,
		games: {
			1: "undecided",
			2: "undecided",
			3: "undecided",
		},
	})
		.then((player) => res.json(player))
		.catch((err) => res.status(400).json(err));
};

module.exports.update = (req, res) => {
	Player.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then((updatedPlayer) => res.json({ player: updatedPlayer }))
		.catch((err) =>
			res.json({ message: "ERROR, PUT: Cannot update player.", error: err })
		);
};

module.exports.delete = (req, res) => {
	Player.deleteOne({ _id: req.params.id })
		.then((result) => res.json({ result: result }))
		.catch((err) =>
			res.json({ message: "ERROR, DELETE: Cannot delete player.", error: err })
		);
};
