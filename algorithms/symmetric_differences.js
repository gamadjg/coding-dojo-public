/*
Given two arrays of ints
return the symmetric differences, (aka disjunctive union)
    - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
    think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
    - i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)
Venn Diagram Visualization:
    - https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
*/

function symmetricDifferencesDict(numsA, numsB) {
	const dictionaryA = {};
	const dictionaryB = {};
	for (let i = 0; i < Math.max(numsA.length, numsB.length); i++) {
		if (numsA[i] && !dictionaryA[numsA[i]]) {
			dictionaryA[numsA[i]] = 1;
		}
		if (numsB[i] && !dictionaryB[numsB[i]]) {
			dictionaryB[numsB[i]] = 1;
		}
	}
	Object.keys(dictionaryA).forEach((key) => {
		if (dictionaryB[key]) {
			delete dictionaryA[key];
			delete dictionaryB[key];
		}
	});
	return Object.keys(dictionaryA).concat(Object.keys(dictionaryB));
}

function symmetricDifferencesWhile(numsA, numsB) {
	let i = 0;
	let j = 0;
	result = [];
	while (i < numsA.length || j < numsB.length) {
		// console.log(i, j);
		// console.log(numsA[i], numsB[j]);
		console.log(i, j, result);
		if (numsA[i] < numsB[j] || numsB[j] === undefined) {
			result.push(numsA[i]);
			i++;
		} else if (numsA[i] > numsB[j] || numsA[i] === undefined) {
			result.push(numsB[j]);
			j++;
		} else {
			i++;
			j++;
		}
	}
	return result;
}

const setA1 = [1, 2];
const setB1 = [2, 1];
const expected1 = [];

const setA2 = [1, 2, 3];
const setB2 = [4, 5, 6];
const expected2 = [1, 2, 3, 4, 5, 6];

const setA3 = [4, 1, 2, 3, 4];
const setB3 = [1, 2, 3, 5, 5];
const expected3 = [4, 5];

const setA4 = [];
const setB4 = [];
const expected4 = [];

const setA5 = [];
const setB5 = [1, 2, 3];
const expected5 = [1, 2, 3];

// console.log(symmetricDifferences(setA1, setB1));
console.log(symmetricDifferences(setA2, setB2));
// console.log(symmetricDifferences(setA1, setB1));
// console.log(symmetricDifferences(setA1, setB1));

/*****************************************************************************/
