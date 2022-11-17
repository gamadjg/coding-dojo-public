// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg

/*
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    Bonus: Make it O(n) time
*/

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;
const expected1 = [0, 2];
// Explanation: nums[0] + nums[2] = 2 + 7 = 9. Return order doesn't matter.

const nums2 = [10, 3, 2, 5, 4, -1];
const targetSum2 = 6;
const expected2 = [2, 4];

const nums3 = [3, 8, 4, 1, 9, 0, -2];
const targetSum3 = 6;
const expected3 = [1, 6];

function twoSum1(nums, targetSum) {
	for (let i = 0; i < nums.length; i++) {
		let findSum = targetSum - nums[i];
		for (let j = i + 1; j < nums.length; j++) {
			if (nums.includes(findSum, j + 1)) {
				let ind2 = nums.indexOf(findSum);
				return [i, ind2];
			}
		}
	}
}

function twoSum2(nums, targetSum) {
	for (let i = 0; i < nums.length; i++) {
		let findSum = targetSum - nums[i];
		if (nums.includes(findSum, i + 1)) {
			let ind2 = nums.indexOf(findSum);
			return [i, ind2];
		}
	}
}

console.log(twoSum1(nums1, targetSum1));
console.log(twoSum1(nums2, targetSum2));
console.log(twoSum1(nums3, targetSum3));

console.log(twoSum2(nums1, targetSum1));
console.log(twoSum2(nums2, targetSum2));
console.log(twoSum2(nums3, targetSum3));
/*****************************************************************************/
