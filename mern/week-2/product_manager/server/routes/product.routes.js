const ProductController = require("../controllers/product.controller");

module.exports = function (app) {
	app.get("/api", ProductController.index); // g2g
	app.get("/api/products", ProductController.getAll); // g2g
	app.get("/api/products/:id", ProductController.getOne); //g2g
	app.post("/api/products/create", ProductController.create); // g2g
	// app.get("/api/products/update/:id", ProductController.updateProduct);
	// app.get("/api/products/delete/:id", ProductController.deleteProduct);
};
