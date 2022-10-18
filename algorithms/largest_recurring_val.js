/* 
Array: Mode

Create a function that, given an array of ints,
returns the int that occurs most frequently in the array.
What if there are multiple items that occur the same number of time?
- return all of them (in an array)
- what if all items occur the same number of times?
    - return empty array
*/

const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];

const nums6 = [5, 1, 4, 1, 5, 4];
const expected6 = [];
//  - order doesn't matter

function mode(nums) {
	if (nums.length < 2) {
		return nums;
	}
	let object = {};
	let max = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] in object) {
			object[nums[i]] += 1;
			if (max <= object[nums[i]]) {
				max = object[nums[i]];
			} else {
				max++;
			}
		} else {
			object[nums[i]] = 1;
			if (max == 0) {
				max = 1;
			}
		}
	}
	let keys = Object.keys(object);
	let arr = [];
	let total = 0;
	for (let j = 0; j < keys.length; j++) {
		if (max === object[keys[j]]) {
			arr.push(parseInt(keys[j]));
		}
		total += parseInt(object[keys[j]]);
	}
	if (total % keys.length === 0) {
		return [];
	}
	return arr;
}

function mode(nums) {
	if (nums.length < 2) {
		return nums;
	}
	let object = {};
	let max = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] in object) {
			object[nums[i]] += 1;
			if (max <= object[nums[i]]) {
				max = object[nums[i]];
			} else {
				max++;
			}
		} else {
			object[nums[i]] = 1;
			if (max == 0) {
				max = 1;
			}
		}
	}
	let keys = Object.keys(object);
	let arr = [];
	let total = 0;
	for (let j = 0; j < keys.length; j++) {
		if (max === object[keys[j]]) {
			arr.push(parseInt(keys[j]));
		}
		total += parseInt(object[keys[j]]);
	}
	if (total % keys.length === 0) {
		return [];
	}
	return arr;
}

console.log(mode(nums1));
console.log(mode(nums2));
console.log(mode(nums3));
console.log(mode(nums4));
console.log(mode(nums5));
console.log(mode(nums6));
