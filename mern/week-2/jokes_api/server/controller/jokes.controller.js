const Joke = require("../models/jokes.model");

module.exports.getAllJokes = (req, res) => {
	Joke.find()
		.then((allJokes) => res.json({ jokes: allJokes }))
		.catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getOneJoke = (req, res) => {
	Joke.findOne({ _id: req.params.id })
		.then((oneJoke) => res.json({ joke: oneJoke }))
		.catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getRandomJoke = (req, res) => {
	Joke.count()
		.then((numOfJokes) => {
			let randomNum = Math.floor(Math.random() * numOfJokes);
			Joke.find({ _id: { $exists: true } })
				.limit(1)
				.skip(randomNum)
				.then((oneJoke) => res.json({ joke: oneJoke }))
				.catch((err) =>
					res.json({ message: "Something went wrong", error: err })
				);
		})
		.catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createJoke = (req, res) => {
	Joke.create(req.body)
		.then((newJoke) => res.json({ joke: newJoke }))
		.catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateJoke = (req, res) => {
	Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then((updatedJoke) => res.json({ joke: updatedJoke }))
		.catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteJoke = (req, res) => {
	Joke.deleteOne({ _id: req.params.id })
		.then((result) => res.json({ result: result }))
		.catch((err) => res.json({ message: "Something went wrong", error: err }));
};
