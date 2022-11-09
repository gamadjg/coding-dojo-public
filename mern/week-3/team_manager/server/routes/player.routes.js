const PlayerController = require("../controllers/player.controller");

module.exports = function (app) {
	// GET ALL
	app.get("/api/players", PlayerController.getAll);
	// GET ONE
	app.get("/api/players/:id", PlayerController.getOne);
	// POST
	app.post("/api/players/create", PlayerController.create); // g2g
	// PUT ONE
	app.put("/api/players/:id/edit", PlayerController.update); // g2g
	// DELETE ONE
	app.delete("/api/players/:id/delete", PlayerController.delete); //g2g
};
