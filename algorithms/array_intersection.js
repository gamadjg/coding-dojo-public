/* 
Efficiently combine two already sorted multiset arrays 
into an array containing the sorted set intersection of the two.

Output: only the shared values between the two arrays (deduped).

Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

function orderedIntersection(sortedA, sortedB) {
	let returnArr = [];
	let i = 0;
	let j = 0;
	while (i < sortedA.length && j < sortedB.length) {
		if (sortedA[i] > sortedB[j]) {
			if (j < sortedB.length) j++;
		} else if (sortedA[i] < sortedB[j]) {
			if (i < sortedA.length) i++;
		} else if (sortedA[i] == sortedB[j]) {
			sortedA[i] != returnArr[returnArr.length - 1]
				? returnArr.push(sortedA[i])
				: null;
			i++;
			j++;
		}
	}
	return returnArr;
}
console.log(orderedIntersection(numsA1, numsB1));
console.log(orderedIntersection(numsA2, numsB2));
console.log(orderedIntersection(numsA3, numsB3));
/*****************************************************************************/
