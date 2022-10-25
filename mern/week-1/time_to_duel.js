class Card {
	constructor(name, cost) {
		this.name = name;
		this.cost = cost;
	}

	print() {
		console.log(JSON.stringify(this, null, 2));
	}
}

class Unit extends Card {
	constructor(name, cost, power, res) {
		super(name, cost);
		this.power = power;
		this.res = res;
	}

	attack(target) {
		target.res -= this.power;
		console.log(`${this.name} attacks ${target.name} for ${this.power} points`);
	}
}

class Effect extends Card {
	constructor(name, cost, text, stat, magnitude) {
		super(name, cost);
		this.text = text;
		this.stat = stat;
		this.magnitude = magnitude;
	}

	perform_on(target) {
		console.log(
			`${this.name} performed on ${target.name}, affecting ${this.stat} for ${this.magnitude}`
		);
		//
		target[this.stat] += parseInt(this.magnitude);
	}
}

david = new Unit("David", 10, 2, 5);
aaron = new Unit("Aaron", 10, 2, 10);

pull_neck = new Effect(
	"pull neck",
	2,
	"Didn't stretch, reduce resistance by 2",
	"res",
	"-2"
);

david.print();
aaron.print();
david.attack(aaron);
aaron.print();
pull_neck.perform_on(david);
david.print();
