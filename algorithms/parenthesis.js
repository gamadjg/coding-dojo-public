/*
- loop through the array
- push all parenthesis and brackets into an array

W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!
({}[({})])[{}]
() = +1       +1        -1  -1
{} =   +1(-1)     +1(-1)        +1(-1)
[] =        +1            -1  +1      -1

- a bracket cant close if the child opened and didn't close within

parent = 1  2
child = 1-1  1-1
subchild = 1
*/

function setHierarchy(str) {
	let parentInc = "";
	let parentDec = "";
	let childInc = "";
	let childDec = "";
	let subChildInc = "";
	let subChildDec = "";
	console.log(str);

	if (str.length == 1) {
		return false;
	}

	for (let i = 0; i < str.length; i++) {
		if (
			((str[i] == "(") | (str[i] == "{") | (str[i] == "[")) &
			(parentInc == "")
		) {
			parentInc = str[i];
		} else if (
			((str[i] == "(") | (str[i] == "{") | (str[i] == "[")) &
			(childInc == "") &
			(parentInc != str[i])
		) {
			childInc = str[i];
		} else if (
			((str[i] == "(") | (str[i] == "{") | (str[i] == "[")) &
			(subChildInc == "") &
			(parentInc != str[i]) &
			(childInc != str[i])
		) {
			subChildInc = str[i];
		}
	}

	if (parentInc == "(") {
		parentDec = ")";
	} else if (parentInc == "{") {
		parentDec = "}";
	} else if (parentInc == "[") {
		parentDec = "]";
	}

	if (childInc == "(") {
		childDec = ")";
	} else if (childInc == "{") {
		childDec = "}";
	} else if (childInc == "[") {
		childDec = "]";
	}

	if (subChildInc == "(") {
		subChildDec = ")";
	} else if (subChildInc == "{") {
		subChildDec = "}";
	} else if (subChildInc == "[") {
		subChildDec = "]";
	}
	console.log(
		`--Hierarchy--\nParents:${parentInc},${parentDec}\nChild:${childInc},${childDec}\nSubChild:${subChildInc},${subChildDec}`
	);
	return [parentInc, parentDec, childInc, childDec, subChildInc, subChildDec];
}
function closingBlocks(str) {
	let parent = 0;
	let child = 0;
	let subChild = 0;
	let newHierarchy = setHierarchy(str);
	if (newHierarchy == false) {
		return false;
	}
	let parentOpenedAt = 0;
	let childOpenedAt = 0;
	let subChildOpenedAt = 0;
	let parentInc = newHierarchy[0];
	let parentDec = newHierarchy[1];
	let childInc = newHierarchy[2];
	let childDec = newHierarchy[3];
	let subChildInc = newHierarchy[4];
	let subChildDec = newHierarchy[5];
	let openedAt = false;
	for (let i = 0; i <= str.length - 1; i++) {
		if ((parent === 0) & (child === 0) & (subChild === 0) & (openedAt === 0)) {
			newHierarchy = setHierarchy(str.substring(i, str.length));
			if (newHierarchy == false) {
				return false;
			} else {
				parentInc = newHierarchy[0];
				parentDec = newHierarchy[1];
				childInc = newHierarchy[2];
				childDec = newHierarchy[3];
				subChildInc = newHierarchy[4];
				subChildDec = newHierarchy[5];
				parentOpenedAt = 0;
				childOpenedAt = 0;
				subChildOpenedAt = 0;
			}
		}

		switch (str[i]) {
			case parentInc:
				openedAt += 3;
				parent++;
				child++;
				subChild++;
				parentOpenedAt = parent + child + subChild;
				console.log(
					`parent+: ${parent}, ${child}, ${subChild},---- ${parentOpenedAt}, ${childOpenedAt}, ${subChildOpenedAt}`
				);
				break;
			case parentDec:
				openedAt -= 3;
				parentOpenedAt = parent + child + subChild;
				console.log(openedAt);

				console.log(
					`parent-: ${parent}, ${child}, ${subChild},---- ${parentOpenedAt}, ${childOpenedAt}, ${subChildOpenedAt}`
				);
				if (openedAt != parentOpenedAt - 3) {
					console.log("parent close");
					return false;
				}
				parent--;
				child--;
				subChild--;
				// openedAt -= 3;
				console.log(
					`parent-: ${parent}, ${child}, ${subChild},---- ${parentOpenedAt}, ${childOpenedAt}, ${subChildOpenedAt}`
				);
				break;
			case childInc:
				openedAt += 2;
				child++;
				subChild++;
				childOpenedAt = parent + child + subChild;
				console.log(
					`child+: ${parent}, ${child}, ${subChild},---- ${parentOpenedAt}, ${childOpenedAt}, ${subChildOpenedAt}`
				);
				break;
			case childDec:
				if (openedAt != parent + child + subChild) {
					console.log("child close");
					return false;
				}
				openedAt -= 2;
				child--;
				subChild--;
				childOpenedAt = parent + child + subChild;
				console.log(
					`child-: ${parent}, ${child}, ${subChild},---- ${parentOpenedAt}, ${childOpenedAt}, ${subChildOpenedAt}`
				);
				break;
			case subChildInc:
				openedAt += 1;
				subChild++;
				subChildOpenedAt = parent + child + subChild;
				console.log(
					`subChild+: ${parent}, ${child}, ${subChild},---- ${parentOpenedAt}, ${childOpenedAt}, ${subChildOpenedAt}`
				);
				break;
			case subChildDec:
				if (openedAt != parent + child + subChild) {
					console.log("subChild close");
					return false;
				}
				openedAt -= 1;
				subChild--;
				subChildOpenedAt = parent + child + subChild;
				console.log(
					`subChild-: ${parent}, ${child}, ${subChild},---- ${parentOpenedAt}, ${childOpenedAt}, ${subChildOpenedAt}`
				);
				break;
			default:
				console.log("default");
				return false;
		}
		if ((parent > child) | (child > subChild)) {
			console.log(
				`heirarchy: ${parent}, ${child}, ${subChild},---- ${parentOpenedAt}, ${childOpenedAt}, ${subChildOpenedAt}`
			);
			return false;
		}
		if ((parent < 0) | (child < 0) | (subChild < 0)) {
			console.log(
				`less than 0: ${parent}, ${child}, ${subChild},---- ${parentOpenedAt}, ${childOpenedAt}, ${subChildOpenedAt}`
			);
			return false;
		}
	}
	if ((parent != 0) | (child != 0) | (subChild != 0)) {
		console.log(`Not Zero: ${parent}, ${child}, ${subchild}`);
		return false;
	}
	return true;
}

let st1 = "({}[({})])[{}]";
let st2 = "({}[]){";
let st3 = "()[(]{)}";
console.log(closingBlocks(st1)); // true
// console.log(closingBlocks(st2));
// console.log(closingBlocks(st3));

/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

// const str1 = "Y(3(p)p(3)r)s";
// const expected1 = true;

// const str2 = "N(0(p)3";
// const expected2 = false;
// // Explanation: not every parenthesis is closed.

// const str3 = "N(0)t ) 0(k";
// const expected3 = false;
// // Explanation: because the second ")" is premature: there is nothing open for it to close.

// const str4 = "a(b))(c";
// const expected4 = false;
// // Explanation: same number of opens and closes but the 2nd closing closes nothing.

// function parensValid(str) {}

// /*****************************************************************************/

// /*
// Braces Valid
// Given a string sequence of parentheses, braces and brackets, determine whether it is valid.
// */

// const two_str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
// const two_expected1 = true;

// const two_str2 = "D(i{a}l[ t]o)n{e";
// const two_expected2 = false;

// const two_str3 = "A(1)s[O (n]0{t) 0}k";
// const two_expected3 = false;

// function bracesValid(str) {}
