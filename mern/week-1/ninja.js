class Ninja {
	constructor(name, health) {
		this.name = name;
		this.health = health;
		this.speed = 3;
		this.strength = 3;
	}

	sayName() {
		console.log("Ninja name: " + this.name);
	}

	showStats() {
		console.log(
			`Name: ${this.name}\nHealth: ${this.health}\nSpeed: ${this.speed}\nStrength: ${this.strength}`
		);
	}

	drinkSake() {
		this.health += 10;
	}
}

const david = new Ninja("David", 100);
david.drinkSake();
david.showStats();
