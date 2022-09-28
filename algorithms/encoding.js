/* 
Given in an alumni interview in 2021.
String Encode
You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears. 


If final result is not shorter (such as "bb" => "b2" ),
return the original string.
*/

const str1 = "aaaabbcdddaaa";
const expected1 = "a4b2c1d3a3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

function encode(str) {
	let result = "";
	let i = 1;
	let letterCount = 1;
	let arr = str.split("");
	let tempLetter = arr[0];
	while (i <= arr.length) {
		if (tempLetter == arr[i]) {
			letterCount++;
			i++;
		} else {
			result += tempLetter + letterCount;
			tempLetter = arr[i];
			letterCount = 1;
			startNum = i;
			i++;
		}
	}
	if (result.length >= str.length) {
		result = str;
	}
	return result;
}

console.log(encode(str1));
console.log(encode(str2));
console.log(encode(str3));
console.log(encode(str4));

/*****************************************************************************/

/* 
  String Decode  
*/

const two_str1 = "a3b2c1d3";
const two_expected1 = "aaabbcddd";

const two_str2 = "a3b2c12d10";
const two_expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 *
 *
 */
function decodeStr(str) {}
