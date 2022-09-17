function pizzaOven(crustType, sauceType, cheeses, toppings) {
	let pizza = {};
	pizza.crustType = crustType;
	pizza.sauceType = sauceType;
	pizza.cheeses = cheeses;
	pizza.toppings = toppings;
	return pizza;
}

let allPizzaOptions = {
	crustType: ["Hand Tossed", "Deep Dish", "Stuffed", "Thin", "Gluten Free"],
	sauceType: [
		"Traditional",
		"Meatball Marinara",
		"Alfredo",
		"Garlic Rub",
		"none",
	],
	cheeses: ["Mozzarella", "Feta", "Parmesan", "Ricotta", "Gorgonzola"],
	toppings: [
		"Mushroom",
		"Olives",
		"Garlic",
		"An unhealthy amount of garlic",
		"Jalapenos",
	],
	getRandomPizza: function () {
		return pizzaOven(
			allPizzaOptions.crustType[Math.round(Math.random() * 4)],
			allPizzaOptions.sauceType[Math.round(Math.random() * 4)],
			allPizzaOptions.cheeses[Math.round(Math.random() * 4)],
			allPizzaOptions.toppings[Math.round(Math.random() * 4)]
		);
	},
};

let pizza1 = pizzaOven(
	"deep dish",
	"traditional",
	["mozzarella"],
	["pepperoni", "sausage"]
);

let pizza2 = pizzaOven(
	"hand tossed",
	"meatball marinara",
	["mozzarella", "feta"],
	["mushrooms", "olives", "onions"]
);

let pizza3 = pizzaOven("thin", "alfredo", ["none please."], ["just pineaple."]);

let pizza4 = pizzaOven(
	"stuffed",
	"",
	["mozzarella", "feta"],
	[
		"mushrooms",
		"olives",
		"garlic",
		"unhealthy amount of jalapenos",
		"canadian bacon",
		"ham",
		"extra meat",
	]
);

console.log(allPizzaOptions.getRandomPizza());
