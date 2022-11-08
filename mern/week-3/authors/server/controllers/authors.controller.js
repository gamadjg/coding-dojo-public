const { Author } = require("../models/Authors.model");

module.exports.index = (req, res) => {
	res.json({
		message: "Hello World",
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
		.catch((err) => res.json({ message: "Something went wrong", error: err }));
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

// module.exports.update = (req, res) => {
// 	Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
// 		.then((updatedAuthor) => res.json({ author: updatedAuthor }))
// 		.catch((err) =>
// 			res.json({ message: "ERROR: Controller update author", error: err })
// 		);
// };

// module.exports.delete = (req, res) => {
// 	Author.deleteOne({ _id: req.params.id })
// 		.then((result) => res.json({ result: result }))
// 		.catch((err) =>
// 			res.json({ message: "ERROR: Controller delete author", error: err })
// 		);
// };
