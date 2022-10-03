/* 
Zip Arrays into Map


Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.
Associative arrays are sometimes called maps because a key (string) maps to a value 
*/

const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];

const expected1 = {
	abc: 42,
	3: "wassup",
	yo: true,
};

const keys2 = [];
const vals2 = [];
const expected2 = {};

const keys3 = ["abc", 3, ["animal", "treat"]]; // ["abc", 3, "animal", "treat"];
const vals3 = [42, "wassup", true];
``;
const expected3 = {
	abc: 42,
	3: "wassup",
	animal: true,
	treat: true,
};

const keys4 = ["abc", 3, "yo"];
const vals4 = [42, "wassup"];

const expected4 = {
	abc: 42,
	3: "wassup",
	yo: null,
};

const keys5 = ["abc", 3];
const vals5 = [42, "wassup", true];

const expected5 = false;

function zipArraysIntoMap(keys, values) {
	let expected = {};

	if (keys.length < values.length) {
		return false;
	}

	for (let i = 0; i < keys.length; i++) {
		if (values[i] === undefined) {
			expected[keys[i]] = null;
		} else if (Array.isArray(keys[i])) {
			keys[i].forEach((element) => {
				expected[element] = values[i];
			});
		} else {
			expected[keys[i]] = values[i];
		}
	}
	return expected;
}

console.log(zipArraysIntoMap(keys1, vals1));
console.log(zipArraysIntoMap(keys2, vals2));
console.log(zipArraysIntoMap(keys3, vals3));
console.log(zipArraysIntoMap(keys4, vals4));
console.log(zipArraysIntoMap(keys5, vals5));

/*
Invert Hash
A hash table / hash map is an obj / dictionary
Given an object / dict,
return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
*/

const two_obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
const two_expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };

const two_obj2 = {
	name: "Zaphod",
	charm: "high",
	morals: ["dicey", "something"],
};
const two_expected2 = {
	Zaphod: "name",
	high: "charm",
	dicey: "morals",
	something: "morals",
};

const two_obj3 = {
	name: "Zaphod",
	charm: "high",
	morals: "dicey",
	something: "dicey",
};
const two_expected3 = {
	Zaphod: "name",
	high: "charm",
	dicey: ["morals", "something"],
};

/**
 * Inverts the given object's key value pairs so that the original values
 * become the keys and the original keys become the values.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object<string, any>} obj
 * @return The given object with key value pairs inverted.
 */
function invertObj(obj) {}
