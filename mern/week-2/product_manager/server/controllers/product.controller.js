const { Product } = require("../models/product.model");

module.exports.index = (req, res) => {
	res.json({
		message: "Hello World",
	});
};

module.exports.getAll = (req, res) => {
	Product.find()
		.then((allProducts) => res.json(allProducts))
		.catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getOne = (req, res) => {
	Product.findOne({ _id: req.params.id })
		.then((product) => res.json({ product: product }))
		.catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.create = (req, res) => {
	const { title, price, description } = req.body;
	Product.create({
		title,
		price,
		description,
	})
		.then((product) => res.json(product))
		.catch((err) => res.json(err));
};

module.exports.update = (req, res) => {
	Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then((updatedProduct) => res.json({ product: updatedProduct }))
		.catch((err) =>
			res.json({ message: "ERROR: Controller update product", error: err })
		);
};

module.exports.delete = (req, res) => {
	Product.deleteOne({ _id: req.params.id })
		.then((result) => res.json({ result: result }))
		.catch((err) =>
			res.json({ message: "ERROR: Controller delete product", error: err })
		);
};
