/* 
Given a SORTED array of integers, dedupe the array 
Because array elements are already in order, all duplicate values will be grouped together.
Ok to use a new array
Bonus: do it in O(n) time (no nested loops, new array ok)
Bonus: Do it in-place (no new array)
Bonus: Do it in-place in O(n) time and no new array
Bonus: Keep it O(n) time even if it is not sorted
*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 1];
const expected4 = [1];

function dedupeSorted(nums) {}

console.log(dedupeSorted(num1));
// console.log(dedupeSorted(num2));
// console.log(dedupeSorted(num3));
// console.log(dedupeSorted(num4));

/*****************************************************************************/

/* 
Given an array of integers
return the first integer from the array that is not repeated anywhere else
If there are multiple non-repeated integers in the array,
the "first" one will be the one with the lowest index.
*/

const two_nums1 = [3, 5, 4, 3, 4, 6, 5];
const two_expected1 = 6;

const two_nums2 = [3, 5, 5];
const two_expected2 = 3;

const two_nums3 = [3, 3, 5];
const two_expected3 = 5;

const two_nums4 = [5];
const two_expected4 = 5;

const two_nums5 = [];
const two_expected5 = null;

function firstNonRepeated(nums) {}

console.log(firstNonRepeated(two_nums1));
// console.log(firstNonRepeated(two_nums2));
// console.log(firstNonRepeated(two_nums3));
// console.log(firstNonRepeated(two_nums4));