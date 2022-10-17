/* 
Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;

function sumArr(nums) {
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
	}
	return sum;
}

function sumArrRecursive(nums, i = 0) {
	if (i === nums.length) {
		return 0;
	}
	let sum = sumArrRecursive(nums, i + 1) + nums[i];
	return sum;
}

console.log(sumArrRecursive(nums1));
console.log(sumArrRecursive(nums2));
console.log(sumArrRecursive(nums3));

// **********************************************************************

/* 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const two_num1 = 5;
const two_expected1 = 15;
// Explanation: (1+2+3+4+5)

const two_num2 = 2.5;
const two_expected2 = 3;
// Explanation: (1+2)

const two_num3 = -1;
const two_expected3 = 0;

function recursiveSigma(num, i = 1) {
	if (num < 1) {
		return 0;
	}
	return recursiveSigma(num - 1, i + 1) + i;
}

console.log(recursiveSigma(two_num1));
console.log(recursiveSigma(two_num2));
console.log(recursiveSigma(two_num3));
