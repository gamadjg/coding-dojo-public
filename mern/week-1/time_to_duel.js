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
		target[this.stat] += parseInt(this.magnitude);
	}
}

hard_algorithm = new Effect(
	"Hard Algorithm",
	2,
	"Increase target's resilience by 3",
	"res",
	"+3"
);

unhandled_promise_rejection = new Effect(
	"Unhandled Promise Rejection",
	1,
	"Reduce target's resilience by 2",
	"res",
	"-2"
);

pair_programming = new Effect(
	"Pair Programming",
	3,
	"Increase target's power by 2",
	"power",
	"+2"
);

red_belt_ninja = new Unit("Red Belt Ninja", 3, 3, 4);
black_belt_ninja = new Unit("Black Belt Ninja", 4, 5, 4);
red_belt_ninja.print();
black_belt_ninja.print();

hard_algorithm.perform_on(red_belt_ninja);
red_belt_ninja.print();

unhandled_promise_rejection.perform_on(red_belt_ninja);
red_belt_ninja.print();

pair_programming.perform_on(red_belt_ninja);
red_belt_ninja.print();

red_belt_ninja.attack(black_belt_ninja);
black_belt_ninja.print();
