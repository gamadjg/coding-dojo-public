/*
Challenge 1

Write a function that is given an array and each time the value is "food" it 
    should console log "yummy". If "food" was not present in the array console 
    log "I'm hungry" once.
*/

function alwaysHungry(arr) {
	let counter = 0;
	arr.forEach((element) => {
		if (element == "food") {
			console.log("yummy");
		} else {
			counter += 1;
		}
	});

	if (counter == arr.length) {
		console.log("I'm hungry");
	}
}

// alwaysHungry([3.14, "food", "pie", true, "food"]);
// // this should console log "yummy", "yummy"
// alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

/*
Challenge 2

Given an array and a value cutoff, return a new array containing only the values larger than cutoff.
*/
function highPass(arr, cutoff) {
	var filteredArr = [];
	arr.forEach((element) => {
		if (element > cutoff) filteredArr.push(element);
	});

	return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]
