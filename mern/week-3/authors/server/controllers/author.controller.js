const { Author } = require("../models/author.model");

module.exports.connectionTest = (req, res) => {
	res.json({
		message: "API connection successful",
	});
};

module.exports.getAll = (req, res) => {
	Author.find()
		.then((allAuthors) => res.json(allAuthors))
		.catch((err) =>
			res.json({ message: "ERROR, GET: Cannot get all authors.", error: err })
		);
};

module.exports.getOne = (req, res) => {
	Author.findOne({ _id: req.params.id })
		.then((author) => res.json({ author: author }))
		.catch((err) =>
			res.json({ message: "ERROR, GET: Cannot get author.", error: err })
		);
};

module.exports.create = (req, res) => {
	const { name } = req.body;
	Author.create({
		name,
	})
		.then((author) => res.json(author))
		.catch((err) =>
			res.json({ message: "ERROR, POST: Cannot create author.", error: err })
		);
};

module.exports.update = (req, res) => {
	Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then((updatedAuthor) => res.json({ author: updatedAuthor }))
		.catch((err) =>
			res.json({ message: "ERROR, PUT: Cannot update author.", error: err })
		);
};

module.exports.delete = (req, res) => {
	Author.deleteOne({ _id: req.params.id })
		.then((result) => res.json({ result: result }))
		.catch((err) =>
			res.json({ message: "ERROR, DELETE: Cannot delete author.", error: err })
		);
};
