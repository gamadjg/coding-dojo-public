Number.prototype.isPrime = function () {
	for (let i = 2; i <= Math.sqrt(this); i++) {
		if (this % i === 0) {
			return false;
		}
	}
	return true;
};
function find_prime(n) {
	const { performance } = require("perf_hooks");
	const start = performance.now();
	let primeCount = 0;
	let num = 2; // for math reasons, 1 is considered prime
	while (primeCount < n) {
		if (num.isPrime()) {
			primeCount++;
		}
		num++;
	}
	console.log(`The ${n}th prime number is ${num - 1}`);
	console.log(`This took ${performance.now() - start} milliseconds to run`);
}
// find_prime(100000);
// find_prime(1000000);

// --------------------------------------------------------------------------------------------

// recursive
const { performance } = require("perf_hooks");
let start = performance.now();
function rFib(n) {
	if (n < 2) {
		return n;
	}
	return rFib(n - 1) + rFib(n - 2);
}
// rFib(20);
// console.log(`This took ${performance.now() - start} milliseconds to run`);

// iterative
start = performance.now();
function iFib(n) {
	const vals = [0, 1];
	while (vals.length - 1 < n) {
		let len = vals.length;
		vals.push(vals[len - 1] + vals[len - 2]);
	}
	return vals[n];
}
// iFib(20);
// console.log(`This took ${performance.now() - start} milliseconds to run`);

/*
Iterative fib is faster O(N) since the amount of memory space required to complete the iteration never increases past the amount 
    required for the size of N. 

Recursive fib on the other hand is O(2^N), meaning, the amount of memory space required to complete increases exponentially as 
    the recursive fibonacci calcs of the two numbers that sum up into n must calculated as well. 
*/

// --------------------------------------------------------------------------------------------
// Reverse a string
const story =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
start = performance.now();
const reversed1 = story.split("").reverse().join("");
console.log(`This took ${performance.now() - start} milliseconds to run`);

start = performance.now();
let strR = "";
for (let i = 0; i < story.length - 1; i++) {
	strR = story[i] + strR;
}
console.log(`This took ${performance.now() - start} milliseconds to run`);
