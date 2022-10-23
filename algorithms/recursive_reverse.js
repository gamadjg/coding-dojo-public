/* 
  Recursively reverse a string
  helpful methods:
  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

function reverseStr(str, i = 0, newStr = "") {
	// console.log(i);
	// edge

	// base
	if (i == str.length) {
		return newStr;
	}
	// recursion
	newStr += str[str.length - i - 1];
	return reverseStr(str, i + 1, newStr);
}

// console.log(reverseStr(str1));
// console.log(reverseStr(str2));

/*****************************************************************************/

/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

const two_nums1 = [1, 3, 5, 6];
const two_searchNum1 = 4;
const two_expected1 = false;

const two_nums2 = [4, 5, 6, 8, 12];
const two_searchNum2 = 5;
const two_expected2 = true;

const two_nums3 = [3, 4, 6, 8, 12];
const two_searchNum3 = 3;
const two_expected3 = true;

function binarySearch(sortedNums, searchNum, pointer = sortedNums.length / 2) {
	pointer = Math.floor(pointer);
	// console.log(sortedNums[sortedNums.length - 1 - pointer]);
	//baseline
	if (
		sortedNums[sortedNums.length - 2 - pointer] == searchNum ||
		sortedNums[pointer + 1] == searchNum ||
		sortedNums[sortedNums.length - 1 - pointer] == searchNum
	) {
		return true;
	}
	if (pointer == 0 || pointer == sortedNums.length - 1) {
		return false;
	}
	// console.log(pointer, "pointer");
	//recursive function call
	if (sortedNums[pointer - 1] >= searchNum) {
		//going left
		pointer = pointer - pointer / 2;
		return binarySearch(sortedNums, searchNum, pointer);
	} else if (sortedNums[pointer - 1] < searchNum) {
		//going right
		pointer = pointer + Math.floor(pointer / 2);
		return binarySearch(sortedNums, searchNum, pointer);
	}
	return "not working";
}

console.log(binarySearch(two_nums1, two_expected1));
