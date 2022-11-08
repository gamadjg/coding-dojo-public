const ProductController = require("../controllers/product.controller");

module.exports = function (app) {
	app.get("/api", ProductController.index); // g2g
	app.get("/api/products", ProductController.getAll); // g2g
	app.get("/api/products/:id", ProductController.getOne); //g2g
	app.post("/api/products/create", ProductController.create); // g2g
	app.put("/api/products/:id/edit", ProductController.update); // g2g
	app.delete("/api/products/:id/delete", ProductController.delete); // g2g
};
