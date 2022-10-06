/*
W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!
({}[({})])[{}]
() = +1       +1        -1  -1
{} =   +1(-1)     +1(-1)        +1(-1)
[] =        +1            -1  +1      -1
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
	let openedAt = 0;
	for (let i = 0; i <= str.length - 1; i++) {
		switch (str[i]) {
			case parentInc:
				parent++;
				child++;
				subChild++;
				parentOpenedAt = openedAt;
				openedAt += 3;
				console.log(
					`parent+:\n    ${parent}, ${child}, ${subChild}\n    ${openedAt}-- ${parentOpenedAt}, ${childOpenedAt}, ${subChildOpenedAt}`
				);
				break;
			case parentDec:
				openedAt -= 3;
				if (openedAt != parentOpenedAt) {
					console.log("parent close");
					return false;
				}
				parent--;
				child--;
				subChild--;
				parentOpenedAt = 0;
				console.log(
					`parent-:\n    ${parent}, ${child}, ${subChild}\n    ${openedAt}-- ${parentOpenedAt}, ${childOpenedAt}, ${subChildOpenedAt}`
				);
				break;
			case childInc:
				child++;
				subChild++;
				childOpenedAt = openedAt;
				openedAt += 2;
				console.log(
					`child+:\n    ${parent}, ${child}, ${subChild}\n    ${openedAt}-- ${parentOpenedAt}, ${childOpenedAt}, ${subChildOpenedAt}`
				);
				break;
			case childDec:
				openedAt -= 2;
				if (openedAt != childOpenedAt) {
					console.log("child close");
					return false;
				}
				child--;
				subChild--;
				childOpenedAt = 0;
				console.log(
					`child-:\n    ${parent}, ${child}, ${subChild}\n    ${openedAt}-- ${parentOpenedAt}, ${childOpenedAt}, ${subChildOpenedAt}`
				);
				break;
			case subChildInc:
				subChild++;
				subChildOpenedAt = openedAt;
				openedAt += 1;
				console.log(
					`subChild+:\n    ${parent}, ${child}, ${subChild}\n    ${openedAt}-- ${parentOpenedAt}, ${childOpenedAt}, ${subChildOpenedAt}`
				);
				break;
			case subChildDec:
				openedAt -= 1;
				if (openedAt != subChildOpenedAt) {
					console.log("subChild close");
					return false;
				}
				subChild--;
				subChildOpenedAt = 0;
				console.log(
					`subChild-:\n    ${parent}, ${child}, ${subChild}\n    ${openedAt}-- ${parentOpenedAt}, ${childOpenedAt}, ${subChildOpenedAt}`
				);
				break;
			default:
				console.log("default");
				return false;
		}
		if (
			(parent === 0) &
			(child === 0) &
			(subChild === 0) &
			(openedAt === 0) &
			(i != str.length - 1)
		) {
			newHierarchy = setHierarchy(str.substring(i + 1, str.length));
			if (newHierarchy == false) {
				return false;
			} else {
				parentInc = newHierarchy[0];
				parentDec = newHierarchy[1];
				childInc = newHierarchy[2];
				childDec = newHierarchy[3];
				subChildInc = newHierarchy[4];
				subChildDec = newHierarchy[5];
			}
		}

		if ((parent > child) | (child > subChild)) {
			console.log(
				`heirarchy: ${parent}, ${child}, ${subChild},--${openedAt}-- ${parentOpenedAt}, ${childOpenedAt}, ${subChildOpenedAt}`
			);
			return false;
		}
		if ((parent < 0) | (child < 0) | (subChild < 0)) {
			console.log(
				`less than 0: ${parent}, ${child}, ${subChild},--${openedAt}-- ${parentOpenedAt}, ${childOpenedAt}, ${subChildOpenedAt}`
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
console.log(closingBlocks(st2)); // false
console.log(closingBlocks(st3)); // false
