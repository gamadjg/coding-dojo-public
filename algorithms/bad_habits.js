/* 
    Given an array of objects representing people, and a string representing a bad habit
    return a "santasNaughtyList" containing the first and last names of all the people who
    have the matching bad habit so that santa knows how much coal he needs.
    Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/

const students = [
	{
		firstName: "Alex",
		lastName: "Miller",
		habits: [
			"doesn't wash dishes",
			"falls asleep in lecture",
			"shows up early",
		],
	},
	{
		firstName: "Martha",
		lastName: "Smith",
		habits: ["shows up late", "washes dishes", "helps peers"],
	},
	{
		firstName: "Roger",
		lastName: "Anderson",
		habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
	},
	{
		firstName: "Rick",
		lastName: "James",
		habits: ["shows up early", "helps peers", "washes dishes"],
	},
];

const badHabit1 = "doesn't wash dishes";
const expected1 = ["Alex Miller", "Roger Anderson"];

const badHabit2 = "shows up late";
const expected2 = ["Martha Smith", "Roger Anderson"];

const badHabit3 = "vapes too much";
const expected3 = [];

/**
 * Finds a list of people whose habits contain the given bad habit.
 */

function santasNaughtyList(persons, badHabit) {
	let list = [];
	for (let person in persons) {
		for (let habit in persons[person]["habits"]) {
			if (persons[person]["habits"][habit] == badHabit) {
				list.push(
					persons[person]["firstName"] + " " + persons[person]["lastName"]
				);
			}
		}
	}
	return list;
}
console.log(santasNaughtyList(students, badHabit1));
console.log(santasNaughtyList(students, badHabit2));
console.log(santasNaughtyList(students, badHabit3));

/**
 * Finds a list of people whose habits contain the given bad habit.
 */
const santasNaughtyListFunctional = (persons, badHabit) => {};
/*****************************************************************************/
