let equation = [];
let display = document.querySelector("#display");

function press(num) {
	equation.push(num);
	updateDisplay(num);
}

function setOP(op) {
	if (Number.isInteger(equation[equation.length - 1])) {
		equation.push(op);
		updateDisplay(op);
	} else {
		alert("Cant add consecutive operators");
	}
}

function updateDisplay(newVal) {
	let display = document.querySelector("#display");
	display.innerHTML = display.innerHTML + newVal;
}

function clr() {
	let display = document.querySelector("#display");
	display.innerHTML = "";
	equation = [];
}
