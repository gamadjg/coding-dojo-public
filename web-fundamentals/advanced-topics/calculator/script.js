let equation = [];

function press(num) {
	if (equation[equation.length - 1] == "/" && num == 0) {
		alert("Can't divide by zero!");
	} else {
		equation.push(num);
		updateDisplay(num, "value");
	}
}

function setOP(op) {
	if (Number.isInteger(equation[equation.length - 1])) {
		equation.push(op);
		updateDisplay(op, "operator");
	} else {
		alert("Cant add consecutive operators");
	}
}

function updateDisplay(newVal, type) {
	let display = document.querySelector("#display");

	if (type == "value" || type == "operator") {
		display.innerHTML = display.innerHTML + newVal;
	} else if (type == "clear") {
		display.innerHTML = "";
		equation = [];
	} else if (type == "result") {
		display.innerHTML = newVal;
	}
}

function clr() {
	updateDisplay(0, "clear");
}

function calculate() {
	let result = eval(equation.join(""));
	updateDisplay(result, "result");
}
