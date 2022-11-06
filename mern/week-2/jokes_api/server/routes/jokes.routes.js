const JokeController = require("../controller/jokes.controller");

module.exports = (app) => {
	app.get("/api/jokes", JokeController.getAllJokes); // g2g
	app.get("/api/jokes/random", JokeController.getRandomJoke); // g2g
	app.get("/api/jokes/:id", JokeController.getOneJoke); // g2g
	app.post("/api/jokes/new", JokeController.createJoke); // g2g
	app.put("/api/jokes/update/:id", JokeController.updateJoke); //g2g
	app.delete("/api/jokes/delete/:id", JokeController.deleteJoke); //g2g
};
