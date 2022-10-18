const two_num1 = 0;
const two_expected1 = 0;

const two_num2 = 1;
const two_expected2 = 1;

const two_num3 = 2;
const two_expected3 = 1;

const two_num4 = 3;
const two_expected4 = 2;

const two_num5 = 4;
const two_expected5 = 3;

const two_num6 = 8;
const two_expected6 = 21;

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

// function fibonacci(num, i = 0, a = 0, b = 1, sum = 0) {
// 	// edge
// 	if (num < 2) {
// 		return num;
// 	}
// 	//base
// 	if (i >= num - 1) {
// 		return sum;
// 	}
// 	//recurring
// 	sum = a + b;
// 	a = b;
// 	b = sum;
// 	return fibonacci(num, i + 1, a, b, sum);
// }

function memoization(num, memo = { 0: 0, 1: 1 }) {
	console.log(memo);
	if (num < 2) return num;
	if (memo[num] !== undefined) {
		return memo[num];
	}
	memo[num] = memoization(num - 1, memo) + memoization(num - 2, memo);
	return memo[num];
}

// console.log(fibonacci(two_num1)); // 0
// console.log(fibonacci(two_num2)); // 1
// console.log(fibonacci(two_num3)); // 1
// console.log(fibonacci(two_num4)); // 2
// console.log(fibonacci(two_num5)); // 3
// console.log(fibonacci(two_num6)); // 21

// console.log(memoization(two_num1)); // 0
// console.log(memoization(two_num2)); // 1
// console.log(memoization(two_num3)); // 1
// console.log(memoization(two_num4)); // 2
// console.log(memoization(two_num5)); // 3
// console.log(memoization(two_num6)); // 21

console.log(memoization(5));
