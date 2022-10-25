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

class Sensei extends Ninja {
	constructor(name, health) {
		super(name, health);
		this.speed = 10;
		this.strength = 10;
		this.wisdom = 10;
	}
	speakWisdom() {
		super.drinkSake();
		console.log("Turtles, never liked em.");
	}
}

const david = new Sensei("David", 200);
david.speakWisdom();
david.showStats();
