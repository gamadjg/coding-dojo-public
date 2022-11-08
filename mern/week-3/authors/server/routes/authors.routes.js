const AuthorController = require("../controllers/author.controller");

module.exports = function (app) {
	app.get("/api", AuthorController.index);
	// app.get("/api/authors", AuthorController.getAll);
	// app.get("/api/authors/:id", AuthorController.getOne);
	// app.post("/api/authors/create", AuthorController.create);
	// app.put("/api/authors/:id/edit", AuthorController.update);
	// app.delete("/api/authors/:id/delete", AuthorController.delete);
};
