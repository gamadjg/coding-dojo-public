/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

/*
- set count
- loop through arr
- every time it hits 1
    - if count is less than 1 = false 

*/
const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

function socialDistancingEnforcer(queue) {
	let currentCount = 0;
	let isDistancing = false;
	// not req
	// if (queue.length <= 1) {
	// 	return true;
	// }
	for (let i = 0; i < queue.length; i++) {
		if (queue[i] == 1) {
			if (isDistancing) {
				if (currentCount < 6) {
					return false;
				}
			} else {
				isDistancing = true;
			}
			currentCount = 0;
		}
		if (isDistancing) {
			currentCount++;
		}
	}
	return true;
}

// console.log(socialDistancingEnforcer(queue1));
// console.log(socialDistancingEnforcer(queue2));
// console.log(socialDistancingEnforcer(queue3));
// console.log(socialDistancingEnforcer(queue4));

/*****************************************************************************/

/* 
Balance Index
Here, a balance point is ON an index, not between indices.
Return the balance index where sums are equal on either side
(exclude its own value).

Return -1 if none exist.

*/

const two_nums1 = [-2, 5, 7, 0, 3];
const two_expected1 = 2;

const two_nums2 = [9, 9];
const two_expected2 = -1;
// 15 - 3 - 15
const two_num3 = [10, 3, 2, 3, 20, -8, 1, 2];
const two_expected3 = 3;
// 15 - 3 - 15
const two_num4 = [10, 3, 2, 3, 20, -8, 1, 1, 1];
const two_expected4 = 3;
// 15 - 3 - 18
const two_num5 = [10, 3, 2, 3, 20, -8, 1, 1, 4];
const two_expected5 = -1;

function balanceIndex(nums) {
	if (nums.length < 3) {
		return -1;
	}
	let cr = 0,
		cl = 0,
		left = 0,
		right = nums.length - 1,
		leftVal = nums[left],
		rightVal = nums[right];
	console.log(leftVal, rightVal);

	for (let i = 0; i < nums.length; i++) {
		if (leftVal < rightVal) {
			left += 1;
			leftVal += nums[left];
			console.log(leftVal, rightVal);
		} else if (leftVal > rightVal) {
			right -= 1;
			rightVal += nums[right];
			console.log(leftVal, rightVal);
		} else {
			return (left += 1);
		}
		if (leftVal == rightVal) {
			return true;
		}
	}
}

// 	while (cr + cl < nums.length - 1) {
// 		// console.log("test");
// 		if (leftVal < rightVal) {
// 			// console.log("test2");
// 			leftVal += nums[left];
// 			left++;
// 			cr++;
// 		} else {
// 			// console.log("test3");
// 			rightVal += nums[right];
// 			right--;
// 			cl++;
// 		}
// 		// leftVal += nums[left]
// 		// rightVal += nums[]
// 		// console.log("{left}:{leftVal}, {right}: {rightVal}");
// 		console.log(leftVal, rightVal);
// 	}

// 	return false;
// }

console.log(balanceIndex(two_nums1));
// balanceIndex(two_nums1)
// balanceIndex(two_nums1)
// balanceIndex(two_nums1)
