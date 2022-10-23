/*
Sum To One Digit
Implement a function sumToOne(num)​ that,
given a number, sums that number’s digits
repeatedly until the sum is only one digit. Return
that final one digit result.
Tips:
to access digits from a number, need to convert it .toString() to access each digit via index
parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

function sumToOneDigit(num) {
	// edge cases
	if (num < 10) {
		return num;
	}
	num = num.toString();
	let numStr = num;
	// let sum = 0;
	console.log("num to str: " + num);
	let sum = parseInt(num[0]) + parseInt(num[1]);
	sum = sum.toString();
	console.log("string sum: " + sum);

	if (sum.length < 2) {
		return parseInt(sum);
	}
	let remainderStr = num.slice(2);
	console.log(remainderStr);
	num = sum + remainderStr;
	console.log(num);
	// break case
	if (num.length < 2) {
		return num;
	}

	// recursion
	// take first 2 characters in the num string, add them together, if num.length is still greater than 2, keep recurring
	return sumToOneDigit(num);
}
/*
num = 199
numStr = '199'
sum (10)= 1 + 9
num = 10 +int(numStr.remaineder)0094

num = 10
numStr = '10'
sum (1) = 1
*/

// console.log(sumToOneDigit(num1));
// console.log(sumToOneDigit(num2));
console.log(sumToOneDigit(num3));

// *****************************************************************

/* 
String Anagrams
Given a string,
return array where each element is a string representing a different anagram (a different sequence of the letters in that string).
Ok to use built in methods
*/

const two_str1 = "lim";
const two_expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter

function generateAnagrams(str) {}
