// // Challenge 1: Print odds 1-20
for (let i = 1; i <= 20; i++) {
	if (i % 2 == 1) {
		console.log(i);
	}
}

// Challenge 2:
for (let i = 100; i > 0; i--) {
	if (i % 3 == 0) {
		console.log(i);
	}
}

// Challenge 3:
let sequence = 4;
for (let i = 0; i < 6; i++) {
	console.log(sequence);
	sequence -= 1.5;
}

// Challenge 4: Sigma
let sum = 0;
for (let i = 1; i <= 100; i++) {
	sum += i;
}
console.log(sum);

// // Challenge 5: Factorial
let product = 1;
for (let i = 1; i <= 12; i++) {
	product *= i;
}
console.log(product);
