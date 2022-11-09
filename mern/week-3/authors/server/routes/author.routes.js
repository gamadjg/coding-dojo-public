const AuthorController = require("../controllers/author.controller");

module.exports = function (app) {
	// GET ALL
	app.get("/api/authors", AuthorController.getAll);
	// GET ONE
	app.get("/api/authors/:id", AuthorController.getOne);
	// POST
	app.post("/api/authors/create", AuthorController.create);
	// PUT ONE
	app.put("/api/authors/:id/edit", AuthorController.update);
	// DELETE ONE
	app.delete("/api/authors/:id/delete", AuthorController.delete);
};
